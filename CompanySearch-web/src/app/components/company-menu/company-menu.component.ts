import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-struct';
import { InputComponent } from 'src/shared/components/textbox/input.component';
import { CompanyDto } from 'src/shared/dtos/company.dto';
import { CompanyService } from 'src/shared/services/company.service';
import { noNumbersValidator } from 'src/shared/validators/no-numbers';

@Component({
  selector: 'app-company-menu',
  templateUrl: './company-menu.component.html',
  styleUrls: ['./company-menu.component.scss'],
})
export class CompanyMenuComponent implements OnInit {
  @ViewChild('textBoxRef', { read: InputComponent, static: false })
  public companyTextBoxValue!: string;
  public company!: CompanyDto;
  public date?: NgbDateStruct;
  public unixToDate!: number;
  public unixFromDate!: number;

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {}

  public OnSearch(): void {
    this.companyService
      .getCompany(this.companyTextBoxValue)
      .subscribe((company) => (this.company = company));
    console.log(this.company.name);
  }

  public getToDate(unixDate: number): void {
    this.unixToDate = unixDate;
  }

  public getFromDate(unixDate: number): void {
    this.unixFromDate = unixDate;
  }
}
