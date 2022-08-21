import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
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

  public dateChanged(): void {
    if (this.name == 'from') {
      console.log('dsada');
      this.dateFromChangeEvent.emit(this.formatToUnixTimeStamp());
    } else {
      this.dateToChangeEvent.emit(this.formatToUnixTimeStamp());
    }
  }

  formatToUnixTimeStamp(): number {
    var unixformat = Math.floor(
      new Date(
        this.model.year,
        this.model.month - 1,
        this.model.day
      ).getTime() / 1000
    );
    return unixformat;
  }
}
