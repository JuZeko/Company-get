import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyMenuComponent } from './components/company-menu/company-menu.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { StockHistoryComponent } from './components/stock-history/stock-history.component';

@NgModule({
  declarations: [AppComponent, CompanyMenuComponent, CompanyDetailsComponent, StockHistoryComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
