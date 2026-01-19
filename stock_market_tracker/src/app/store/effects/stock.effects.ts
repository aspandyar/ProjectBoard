import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of, timer, EMPTY, forkJoin } from 'rxjs';
import { 
  switchMap, 
  map, 
  catchError, 
  retry,
  take,
  exhaustMap
} from 'rxjs/operators';
import { StockApiService } from '../../services/stock-api.service';
import * as StockActions from '../actions/stock.actions';
import { selectSelectedSymbols } from '../selectors/stock.selectors';
import { Stock } from '../models/stock-state.model';

@Injectable({
  providedIn: 'root'
})
export class StockEffects {
  private actions$ = inject(Actions);
  private stockApiService = inject(StockApiService);
  private store = inject(Store);

  loadStocks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StockActions.loadStocks),
      switchMap(({ symbols }) => {
        if (symbols.length === 0) {
          return of(StockActions.loadStocksSuccess({ stocks: [] }));
        }

        // Using forkJoin to fetch all stocks in parallel
        // Each request has its own retry logic
        const stockRequests = symbols.map((symbol: string) =>
          this.stockApiService.getStock(symbol).pipe(
            retry({
              count: 3,
              delay: (error, retryCount) => {
                // Exponential backoff with jitter
                const delayMs = Math.min(1000 * Math.pow(2, retryCount - 1), 5000);
                return timer(delayMs);
              }
            }),
            catchError(error => {
              // Return a stock with error state instead of failing completely
              return of({
                symbol,
                price: 0,
                change: 0,
                changePercent: 0,
                volume: 0,
                timestamp: Date.now(),
                error: error.message
              } as Stock & { error?: string });
            })
          )
        );

        // Combine all parallel requests using forkJoin
        // forkJoin waits for all observables to complete
        return forkJoin(stockRequests).pipe(
          map((stocks: Stock[]) => StockActions.loadStocksSuccess({ stocks })),
          catchError(error => of(StockActions.loadStocksFailure({ 
            error: error.message || 'Failed to load stocks' 
          })))
        );
      })
    );
  });

  /**
   * Polling effect using exhaustMap to prevent overlapping requests
   * Demonstrates combination of timer and action streams
   * Uses combineLatest to combine timer with store selector
   */
  startPolling$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StockActions.startPolling),
      switchMap(() =>
        timer(0, 5000).pipe( // Poll every 5 seconds
          exhaustMap(() =>
            this.store.select(selectSelectedSymbols).pipe(
              take(1),
              switchMap((symbols: string[]) => {
                if (symbols.length === 0) {
                  return EMPTY;
                }
                return of(StockActions.loadStocks({ symbols }));
              })
            )
          )
        )
      )
    );
  });
}
