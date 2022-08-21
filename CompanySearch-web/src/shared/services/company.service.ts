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

  getCompany(companyName: string): Observable<CompanyDto> {
    return this.http.get<CompanyDto>(
      environment.baseUrl +
        'company' +
        '?name=' +
        encodeURIComponent(companyName)
    );
  }

  getStockPriceHistory(
    unixFromDate: number,
    unixToDate: number,
    companyName: string
  ) {
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
