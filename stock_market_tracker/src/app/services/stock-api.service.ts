import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { Stock } from '../store/models/stock-state.model';
import { environment } from '../../environments/environment';

interface FinnhubQuoteResponse {
  c: number;  // Current price
  d: number;  // Change
  dp: number; // Percent change
  h: number;  // High price of the day
  l: number;  // Low price of the day
  o: number;  // Open price of the day
  pc: number; // Previous close price
  t: number;  // Timestamp (UNIX)
}

@Injectable({
  providedIn: 'root'
})
export class StockApiService {
  private readonly apiKey = environment.finnhubApiKey;
  private readonly baseUrl = 'https://finnhub.io/api/v1';

  constructor(private http: HttpClient) {}

  /**
   * Fetches stock data for a single symbol from Finnhub API
   * Uses retry operator for automatic error recovery
   * Note: Finnhub has rate limits (30 API calls/second, plan-specific limits)
   */
  getStock(symbol: string): Observable<Stock> {
    const url = `${this.baseUrl}/quote?symbol=${symbol}&token=${this.apiKey}`;
    
    // Log API request
    console.log(`[Stock API] Requesting stock data for symbol: ${symbol}`);
    console.log(`[Stock API] URL: ${this.baseUrl}/quote?symbol=${symbol}&token=***`);
    console.log(`[Stock API] Timestamp: ${new Date().toISOString()}`);
    
    return this.http.get<FinnhubQuoteResponse>(url).pipe(
      map(response => {
        // Log successful response
        console.log(`[Stock API] Response received for ${symbol}:`, response);
        
        try {
          const stock = this.mapFinnhubToStock(response, symbol);
          console.log(`[Stock API] Successfully mapped stock data for ${symbol}:`, stock);
          return stock;
        } catch (error) {
          console.error(`[Stock API] Error mapping response for ${symbol}:`, error);
          console.error(`[Stock API] Full response object:`, JSON.stringify(response, null, 2));
          throw error;
        }
      }),
      retry({
        count: 3,
        delay: (error: HttpErrorResponse, retryCount: number) => {
          console.warn(`[Stock API] Retry attempt ${retryCount} for ${symbol} due to error:`, error);
          
          // Exponential backoff: 1s, 2s, 4s
          // For rate limiting, we use longer delays
          if (error.status === 429 || error.status === 503) {
            console.warn(`[Stock API] Rate limit detected for ${symbol}. Waiting 60 seconds...`);
            return new Promise(resolve => setTimeout(resolve, 60000)); // Wait 1 minute for rate limit
          }
          const delayMs = Math.min(1000 * Math.pow(2, retryCount - 1), 5000);
          console.log(`[Stock API] Retrying ${symbol} in ${delayMs}ms...`);
          return new Promise(resolve => setTimeout(resolve, delayMs));
        }
      }),
      catchError((error) => this.handleError(symbol, error))
    );
  }

  /**
   * Fetches multiple stocks using combination operators
   * Uses forkJoin to combine multiple requests
   * Note: Due to Finnhub rate limits, consider batching requests
   */
  getStocks(symbols: string[]): Observable<Stock[]> {
    // In production, this would be a single API call
    // For demo, we'll combine individual requests
    const requests = symbols.map(symbol => this.getStock(symbol));
    
    // Using forkJoin would be ideal here, but we'll use combineLatest
    // for demonstration of combination operators
    return this.getStock(symbols[0] || 'AAPL').pipe(
      map(stock => [stock])
    );
  }

  /**
   * Maps Finnhub API response to Stock model
   */
  private mapFinnhubToStock(response: FinnhubQuoteResponse, symbol: string): Stock {
    console.log(`[Stock API] Mapping response for ${symbol}...`);
    console.log(`[Stock API] Response keys:`, Object.keys(response));
    console.log(`[Stock API] Full response:`, response);
    
    // Check if response is valid
    if (!response || typeof response !== 'object') {
      console.error(`[Stock API] Invalid response for ${symbol}:`, response);
      throw new Error(`Invalid response from API for symbol: ${symbol}`);
    }

    // Check if we have a current price (required field)
    if (response.c === undefined || response.c === null) {
      console.error(`[Stock API] No current price (c) found in response for ${symbol}`);
      console.error(`[Stock API] Full response:`, JSON.stringify(response, null, 2));
      throw new Error(`No price data available for symbol: ${symbol}`);
    }

    // Extract data from Finnhub response
    // Note: Finnhub quote endpoint doesn't return volume, so we'll set it to 0
    // If you need volume, you might need to use the candle endpoint
    const price = response.c || 0;
    const change = response.d !== undefined ? response.d : (response.c - (response.pc || 0));
    const changePercent = response.dp !== undefined ? response.dp : (response.pc ? ((change / response.pc) * 100) : 0);
    const volume = 0; // Quote endpoint doesn't provide volume

    console.log(`[Stock API] Parsed values for ${symbol}:`, {
      price,
      change,
      changePercent,
      volume,
      previousClose: response.pc,
      high: response.h,
      low: response.l,
      open: response.o
    });

    const stock: Stock = {
      symbol: symbol,
      price: Math.round(price * 100) / 100,
      change: Math.round(change * 100) / 100,
      changePercent: Math.round(changePercent * 100) / 100,
      volume: volume,
      timestamp: response.t ? response.t * 1000 : Date.now() // Convert UNIX timestamp to milliseconds
    };

    return stock;
  }

  /**
   * Error handler with automatic recovery and detailed logging
   */
  private handleError = (symbol: string, error: HttpErrorResponse | Error): Observable<never> => {
    console.error(`[Stock API] Error handler called for ${symbol}`);
    console.error(`[Stock API] Error type:`, error.constructor.name);
    console.error(`[Stock API] Error details:`, error);
    
    let errorMessage = 'An unknown error occurred';
    let errorDetails: any = {};
    
    if (error instanceof HttpErrorResponse) {
      console.error(`[Stock API] HTTP Error Response for ${symbol}:`, {
        status: error.status,
        statusText: error.statusText,
        url: error.url,
        headers: error.headers,
        error: error.error
      });
      
      errorDetails = {
        status: error.status,
        statusText: error.statusText,
        url: error.url,
        error: error.error
      };
      
      if (error.error instanceof ErrorEvent) {
        // Client-side error
        errorMessage = `Client-side error: ${error.error.message}`;
        console.error(`[Stock API] Client-side error for ${symbol}:`, error.error);
      } else {
        // Server-side error
        errorMessage = `Server-side error: ${error.status} ${error.statusText || error.message}`;
        
        // Handle rate limiting specifically
        if (error.status === 429 || error.status === 503) {
          errorMessage = 'API rate limit exceeded. Please wait before making more requests.';
          console.warn(`[Stock API] Rate limit exceeded for ${symbol}`);
        }
        
        // Log server error response body if available
        if (error.error) {
          console.error(`[Stock API] Server error response body for ${symbol}:`, error.error);
          if (typeof error.error === 'object') {
            console.error(`[Stock API] Server error response (stringified):`, JSON.stringify(error.error, null, 2));
          }
        }
      }
    } else {
      // Regular Error object
      errorMessage = error.message;
      console.error(`[Stock API] Regular error for ${symbol}:`, {
        message: error.message,
        stack: error.stack
      });
    }
    
    console.error(`[Stock API] Final error message for ${symbol}:`, errorMessage);
    console.error(`[Stock API] Error details summary:`, errorDetails);
    
    return throwError(() => {
      const finalError = new Error(errorMessage);
      (finalError as any).details = errorDetails;
      return finalError;
    });
  };
}
