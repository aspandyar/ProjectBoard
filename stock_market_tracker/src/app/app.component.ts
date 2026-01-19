import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectLoading, selectError, selectSelectedSymbols } from './store/selectors/stock.selectors';
import * as StockActions from './store/actions/stock.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store) {
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
    
    // Dispatch initial load
    this.store.dispatch(StockActions.loadStocks({ 
      symbols: ['AAPL', 'GOOGL', 'MSFT'] 
    }));
    
    // Start polling
    this.store.dispatch(StockActions.startPolling());
  }

  retry(): void {
    this.store.select(selectSelectedSymbols).subscribe(symbols => {
      this.store.dispatch(StockActions.loadStocks({ symbols }));
    }).unsubscribe();
  }
}
