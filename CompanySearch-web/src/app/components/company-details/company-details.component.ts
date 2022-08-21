import { Component, Input, OnInit } from '@angular/core';
import { CompanyDto } from 'src/shared/dtos/company.dto';
import { StockPriceDto } from 'src/shared/dtos/stock.dto';
import { CompanyService } from 'src/shared/services/company.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss'],
})
export class CompanyDetailsComponent implements OnInit {
  @Input() company!: CompanyDto;
  @Input() unixToDate!: number;
  @Input() unixFromDate!: number;
  public showStocks: boolean = false;
  public stock?: StockPriceDto;
  private stockString!: string;
  private stringObject: any;
  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {}

  public OnClick(): void {
    this.companyService
      .getStockPriceHistory(
        this.unixFromDate,
        this.unixToDate,
        this.company?.ticker
      )
      .subscribe((stock) => (this.stockString = JSON.stringify(stock)));

    this.stringObject = JSON.parse(this.stockString);
    console.log(this.stringObject.c);
    this.showStocks = !this.showStocks;
  }
}
