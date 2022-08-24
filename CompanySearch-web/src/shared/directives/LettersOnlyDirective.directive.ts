import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[lettersOnly]',
})
export class LettersOnlyDirective {
  navigationKeys: Array<string> = ['Backspace']; //Add keys as per requirement
  InputRestriction: string | RegExp = '[a-zA-Z ]';
  constructor(private _el: ElementRef) {}

  @HostListener('keypress', ['$event'])
  handleKeyPress(event: KeyboardEvent) {
    var regex = new RegExp(this.InputRestriction);
    var str = String.fromCharCode(
      !event.charCode ? event.which : event.charCode
    );
    if (regex.test(str)) {
      return true;
    }

    event.preventDefault();
    return false;
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    let dataToPaste = event.clipboardData!.getData('text');
    var regex = new RegExp(this.InputRestriction);
    if (regex.test(dataToPaste)) {
      return true;
    }
    return event.preventDefault();
  }
}
