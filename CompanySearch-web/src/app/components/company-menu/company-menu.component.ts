import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-struct';
import { ToastrService } from 'ngx-toastr';
import { EventService } from 'src/app/services/event.service';
import { DatepickerComponent } from 'src/shared/components/datepicker/datepicker.component';
import { InputComponent } from 'src/shared/components/input/input.component';
import { CompanyDto } from 'src/shared/dtos/company.dto';
import { CompanyService } from 'src/shared/services/company.service';

@Component({
  selector: 'app-company-menu',
  templateUrl: './company-menu.component.html',
  styleUrls: ['./company-menu.component.scss'],
})
export class CompanyMenuComponent implements OnInit {
  @ViewChild('textBoxRef', { read: InputComponent, static: false })
  textBoxRef!: InputComponent;
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
    private eventService: EventService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  public OnSearch(): void {
    if (this.textBoxRef.companyNameForm.get('companyName')?.valid) {
      this.companyService
        .getCompany(this.textBoxRef.companyNameForm.get('companyName')?.value)
        .subscribe((company) => {
          this.company = company;
          if (!company.country) {
            this.toastr.warning('Company do not exist');
          }
        });
      this.eventService.sendMessage(false);
    } else {
      this.textBoxRef.focusInput();
      this.toastr.info('Please input company name');
    }
  }

  public getToDate(unixDate: number): void {
    this.unixToDate = unixDate;
  }

  public getFromDate(unixDate: number): void {
    this.unixFromDate = unixDate;
  }
}
