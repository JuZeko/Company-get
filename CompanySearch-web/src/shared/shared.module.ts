import { CommonModule, DecimalPipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { InputComponent } from './components/textbox/input.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CompanyService } from './services/company.service';

@NgModule({
  declarations: [InputComponent, DatepickerComponent],
  exports: [
    InputComponent,
    DatepickerComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [CompanyService],
})
export class SharedModule {}
