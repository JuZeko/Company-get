import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-struct';
import { EventService } from 'src/app/services/event.service';
import { DatepickerComponent } from 'src/shared/components/datepicker/datepicker.component';
import { TestingComponent } from 'src/shared/components/testing/testing/testing.component';
import { CompanyDto } from 'src/shared/dtos/company.dto';
import { CompanyService } from 'src/shared/services/company.service';

@Component({
  selector: 'app-company-menu',
  templateUrl: './company-menu.component.html',
  styleUrls: ['./company-menu.component.scss'],
})
export class CompanyMenuComponent implements OnInit {
  @ViewChild('textBoxRef', { read: TestingComponent, static: false })
  textBoxRef!: TestingComponent;
  @ViewChild('datePickerFromRef', { read: DatepickerComponent, static: false })
  datePickerFromRef!: DatepickerComponent;
  @ViewChild('datePickerToRef', { read: DatepickerComponent, static: false })
  datePickerToRef!: DatepickerComponent;

  public companyTextBoxValue!: string;
  public company!: CompanyDto;
  public date?: NgbDateStruct;
  public unixToDate!: number;
  public unixFromDate!: number;

  constructor(
    private companyService: CompanyService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {}

  public OnSearch(): void {
    if (this.textBoxRef.companyNameForm.get('companyName')?.valid) {
      this.companyService
        .getCompany(this.textBoxRef.companyNameForm.get('companyName')?.value)
        .subscribe((company) => (this.company = company));
      this.eventService.sendMessage('he');
    } else {
      this.textBoxRef.focusInput();
    }
  }

  public getToDate(unixDate: number): void {
    this.unixToDate = unixDate;
  }

  public getFromDate(unixDate: number): void {
    this.unixFromDate = unixDate;
  }
}
