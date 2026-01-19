import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { SymbolManagerComponent } from './components/symbol-manager/symbol-manager.component';
import { stockReducer } from './store/reducers/stock.reducer';
import { StockEffects } from './store/effects/stock.effects';

@NgModule({
  declarations: [
    AppComponent,
    StockListComponent,
    SymbolManagerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ stocks: stockReducer }),
    EffectsModule.forRoot([StockEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
