import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { NumbersOnlyDirective } from './directives/NumbersOnlyDirective.directive';
import { TestingComponent } from './components/testing/testing/testing.component';
import { InputComponent } from './components/textbox/input.component';
import { CompanyService } from './services/company.service';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    InputComponent,
    DatepickerComponent,
    TestingComponent,
    NumbersOnlyDirective,
  ],
  exports: [
    InputComponent,
    DatepickerComponent,
    FormsModule,
    TestingComponent,
    ReactiveFormsModule,
    NumbersOnlyDirective,
    NgApexchartsModule,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    NgApexchartsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [CompanyService],
})
export class SharedModule {}
