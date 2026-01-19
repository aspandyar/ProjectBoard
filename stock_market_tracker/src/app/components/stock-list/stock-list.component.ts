import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllStocks, selectLastUpdate } from '../../store/selectors/stock.selectors';
import { Stock } from '../../store/models/stock-state.model';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockListComponent {
  stocks$: Observable<Stock[]>;
  lastUpdate$: Observable<number | null>;

  constructor(private store: Store) {
    this.stocks$ = this.store.select(selectAllStocks);
    this.lastUpdate$ = this.store.select(selectLastUpdate);
  }

  getChangeClass(change: number): string {
    return change >= 0 ? 'positive' : 'negative';
  }

  formatTime(timestamp: number | null): string {
    if (!timestamp) return '';
    return new Date(timestamp).toLocaleTimeString();
  }
}
