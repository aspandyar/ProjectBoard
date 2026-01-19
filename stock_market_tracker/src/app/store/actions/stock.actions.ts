import { createAction, props } from '@ngrx/store';
import { Stock } from '../models/stock-state.model';

export const loadStocks = createAction(
  '[Stock] Load Stocks',
  props<{ symbols: string[] }>()
);

export const loadStocksSuccess = createAction(
  '[Stock] Load Stocks Success',
  props<{ stocks: Stock[] }>()
);

export const loadStocksFailure = createAction(
  '[Stock] Load Stocks Failure',
  props<{ error: string }>()
);

export const addSymbol = createAction(
  '[Stock] Add Symbol',
  props<{ symbol: string }>()
);

export const removeSymbol = createAction(
  '[Stock] Remove Symbol',
  props<{ symbol: string }>()
);

export const startPolling = createAction(
  '[Stock] Start Polling'
);

export const stopPolling = createAction(
  '[Stock] Stop Polling'
);
