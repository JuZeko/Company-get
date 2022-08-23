import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CompanyDto } from '../dtos/company.dto';
import { StockPriceDto } from '../dtos/stock.dto';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private http: HttpClient) {}

  public getCompany(companyName: string): Observable<CompanyDto> {
    return this.http.get<CompanyDto>(
      environment.baseUrl +
        'company' +
        '?name=' +
        encodeURIComponent(companyName)
    );
  }

  public getStockPriceHistory(
    unixFromDate: number,
    unixToDate: number,
    companyName: string
  ): Observable<StockPriceDto> {
    return this.http.get<StockPriceDto>(
      environment.baseUrl +
        'stock' +
        '?name=' +
        encodeURIComponent(companyName) +
        '&unixFromDate=' +
        encodeURIComponent(unixFromDate) +
        '&unixToDate=' +
        encodeURIComponent(unixToDate)
    );
  }
}
