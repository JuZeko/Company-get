import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyMenuComponent } from './components/company-menu/company-menu.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { CommonInformationComponent } from './components/common-information/common-information.component';
import { EventService } from './services/event.service';

@NgModule({
  declarations: [
    AppComponent,
    CompanyMenuComponent,
    CompanyDetailsComponent,
    CommonInformationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
