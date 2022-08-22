import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'datepicker-component',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent {
  model!: NgbDateStruct;
  @Output() dateFromChangeEvent = new EventEmitter<number>();
  @Output() dateToChangeEvent = new EventEmitter<number>();
  @Input() name!: string;
  @ViewChild('datePickerRef') datePickerRef!: ElementRef;

  public dateChanged(): void {
    if (this.name == 'from') {
      this.dateFromChangeEvent.emit(this.formatToUnixTimeStamp());
    } else {
      this.dateToChangeEvent.emit(this.formatToUnixTimeStamp());
    }
  }

  public formatToUnixTimeStamp(): any {
    if (
      this.model.year !== null &&
      this.model.month - 1 !== null &&
      this.model.day !== null
    ) {
      var unixformat = Math.floor(
        new Date(
          this.model.year,
          this.model.month - 1,
          this.model.day
        ).getTime() / 1000
      );
      return unixformat;
    } else {
      return undefined;
    }
  }

  public focusInput() {
    this.datePickerRef.nativeElement.focus();
  }
}
