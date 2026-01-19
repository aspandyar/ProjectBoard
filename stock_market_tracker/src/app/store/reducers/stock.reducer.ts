import { createReducer, on } from '@ngrx/store';
import { StockState, initialState } from '../models/stock-state.model';
import * as StockActions from '../actions/stock.actions';

export const stockReducer = createReducer(
  initialState,
  on(StockActions.loadStocks, (state): StockState => ({
    ...state,
    loading: true,
    error: null
  })),
  on(StockActions.loadStocksSuccess, (state, { stocks }): StockState => ({
    ...state,
    stocks,
    loading: false,
    error: null,
    lastUpdate: Date.now()
  })),
  on(StockActions.loadStocksFailure, (state, { error }): StockState => ({
    ...state,
    loading: false,
    error
  })),
  on(StockActions.addSymbol, (state, { symbol }): StockState => ({
    ...state,
    selectedSymbols: [...state.selectedSymbols, symbol.toUpperCase()]
  })),
  on(StockActions.removeSymbol, (state, { symbol }): StockState => ({
    ...state,
    selectedSymbols: state.selectedSymbols.filter(s => s !== symbol)
  }))
);
