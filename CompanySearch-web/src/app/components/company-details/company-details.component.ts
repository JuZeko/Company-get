import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { EventService } from 'src/app/services/event.service';
import { CompanyDto } from 'src/shared/dtos/company.dto';
import { StockPriceDto } from 'src/shared/dtos/stock.dto';
import { stock } from 'src/shared/interfaces/stock.interface';
import { CompanyService } from 'src/shared/services/company.service';
import { CompanyMenuComponent } from '../company-menu/company-menu.component';

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
  public ShowHistorystock?: boolean = false;
  constructor(
    public companyService: CompanyService,
    private companyMenuComponent: CompanyMenuComponent,
    public eventService: EventService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.eventService.receivedMessage().subscribe((value) => {
      this.ShowHistorystock = value;
    });
  }

  public OnClick(): void {
    if (this.isDateValid()) {
      this.spinner.show();
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
          this.stock = this.stringObject as stock;
        });

      this.showStocks = !this.showStocks;
      this.ShowHistorystock = true;
      setTimeout(() => {
        this.spinner.hide();
      }, 4000);
    } else {
      this.toastr.warning('Check your inputs');
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
