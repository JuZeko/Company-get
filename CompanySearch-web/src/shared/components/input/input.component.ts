import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  companyNameForm!: FormGroup;
  @ViewChild('InputRef')
  InputRef!: ElementRef;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.companyNameForm = this.fb.group({
      companyName: [
        '',
        [
          Validators.required,
          Validators.maxLength(35),
          Validators.minLength(1),
        ],
      ],
    });
  }

  public focusInput() {
    this.InputRef.nativeElement.focus();
  }
}
