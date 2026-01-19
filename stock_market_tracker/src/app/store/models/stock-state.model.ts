export interface Stock {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  timestamp: number;
}

export interface StockState {
  stocks: Stock[];
  selectedSymbols: string[];
  loading: boolean;
  error: string | null;
  lastUpdate: number | null;
}

export const initialState: StockState = {
  stocks: [],
  selectedSymbols: ['AAPL', 'GOOGL', 'MSFT'],
  loading: false,
  error: null,
  lastUpdate: null
};
