import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StockState } from '../models/stock-state.model';

export const selectStockState = createFeatureSelector<StockState>('stocks');

export const selectAllStocks = createSelector(
  selectStockState,
  (state: StockState) => state.stocks
);

export const selectSelectedSymbols = createSelector(
  selectStockState,
  (state: StockState) => state.selectedSymbols
);

export const selectLoading = createSelector(
  selectStockState,
  (state: StockState) => state.loading
);

export const selectError = createSelector(
  selectStockState,
  (state: StockState) => state.error
);

export const selectLastUpdate = createSelector(
  selectStockState,
  (state: StockState) => state.lastUpdate
);

export const selectStockBySymbol = (symbol: string) => createSelector(
  selectAllStocks,
  (stocks) => stocks.find(stock => stock.symbol === symbol)
);
