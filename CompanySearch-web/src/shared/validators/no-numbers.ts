import { FormControl } from '@angular/forms';

export function noNumbersValidator(control: FormControl) {
  const isEmtyString = (control.value || '').trim().lenght == 0;
  return isEmtyString ? { empty: true } : null;
}
