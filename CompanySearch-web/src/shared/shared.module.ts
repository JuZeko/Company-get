import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { LettersOnlyDirective } from './directives/LettersOnlyDirective.directive';
import { InputComponent } from './components/input/input.component';
import { CompanyService } from './services/company.service';
import { NgApexchartsModule } from 'ng-apexcharts';
import { StockHistoryComponent } from 'src/app/components/stock-history/stock-history.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventService } from 'src/app/services/event.service';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    InputComponent,
    DatepickerComponent,
    LettersOnlyDirective,
    StockHistoryComponent,
  ],
  exports: [
    InputComponent,
    DatepickerComponent,
    StockHistoryComponent,
    FormsModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    LettersOnlyDirective,
    NgApexchartsModule,
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    BrowserAnimationsModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    NgApexchartsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [CompanyService, EventService],
})
export class SharedModule {}
