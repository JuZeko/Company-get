import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { DatepickerComponent } from 'src/shared/components/datepicker/datepicker.component';
import { TestingComponent } from 'src/shared/components/testing/testing/testing.component';
import { CompanyDto } from 'src/shared/dtos/company.dto';
import { StockPriceDto } from 'src/shared/dtos/stock.dto';
import { stock } from 'src/shared/interfaces/stock.interface';
import { CompanyService } from 'src/shared/services/company.service';
import { CompanyMenuComponent } from '../company-menu/company-menu.component';
import { StockHistoryComponent } from '../stock-history/stock-history.component';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss'],
})
export class CompanyDetailsComponent implements OnInit {
  @Input() company!: CompanyDto;
  @Input() unixToDate!: number;
  @Input() unixFromDate!: number;
  @Input() companyName: string = '';

  @ViewChild('datePickerFromRef', { read: ElementRef })
  datePickerFromRef!: ElementRef;
  @ViewChild('datePickerToRef', { read: ElementRef })
  datePickerToRef!: ElementRef;
  public callRespone: any;
  public showStocks: boolean = false;
  public stock?: any;
  private stockString!: string;
  private stringObject: any;

  constructor(
    public companyService: CompanyService,
    private companyMenuComponent: CompanyMenuComponent
  ) {}

  ngOnInit(): void {}

  public OnClick(): void {
    if (this.isDateValid()) {
      this.companyService
        .getStockPriceHistory(
          this.unixFromDate,
          this.unixToDate,
          this.company?.ticker
        )
        .subscribe((response: StockPriceDto) => {
          this.callRespone = response;
          this.stockString = JSON.stringify(this.callRespone);
          this.stringObject = JSON.parse(this.stockString);
        });

      this.stock = this.stringObject as stock;
      this.showStocks = !this.showStocks;
    }
  }

  public isDateValid(): boolean {
    if (this.unixFromDate === undefined) {
      this.companyMenuComponent.datePickerFromRef.focusInput();
      return false;
    } else if (this.unixToDate === undefined) {
      this.companyMenuComponent.datePickerToRef.focusInput();
      return false;
    }
    return true;
  }
}
