import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectSelectedSymbols } from '../../store/selectors/stock.selectors';
import * as StockActions from '../../store/actions/stock.actions';

@Component({
  selector: 'app-symbol-manager',
  templateUrl: './symbol-manager.component.html',
  styleUrls: ['./symbol-manager.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SymbolManagerComponent {
  selectedSymbols$: Observable<string[]>;
  symbolControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[A-Z]{1,5}$/),
    Validators.minLength(1),
    Validators.maxLength(5)
  ]);

  constructor(private store: Store) {
    this.selectedSymbols$ = this.store.select(selectSelectedSymbols);
  }

  addSymbol(): void {
    if (this.symbolControl.valid && this.symbolControl.value) {
      const symbol = this.symbolControl.value.toUpperCase().trim();
      this.store.dispatch(StockActions.addSymbol({ symbol }));
      this.store.dispatch(StockActions.loadStocks({ 
        symbols: [symbol] 
      }));
      this.symbolControl.reset();
    }
  }

  removeSymbol(symbol: string): void {
    this.store.dispatch(StockActions.removeSymbol({ symbol }));
  }

  getErrorMessage(): string {
    if (this.symbolControl.hasError('required')) {
      return 'Symbol is required';
    }
    if (this.symbolControl.hasError('pattern')) {
      return 'Invalid symbol format (1-5 uppercase letters)';
    }
    return '';
  }
}
