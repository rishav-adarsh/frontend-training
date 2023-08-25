import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'input[appNumbersOnly]', // can only be used with input tag
})
export class NumbersOnlyDirective {
  // property : rhs is optional
  // property='value' : angular will not evaluate the rhs and take it as it is, treat it as a final value
  // [property]='value : angular will evaluate the rhs and treat it as a variable
  // <input type='text' appNumbersOnly />
  // <input type='text' appNumbersOnly="6" />
  // <input type='text' [appNumbersOnly]="variable" />
  @Input() appNumbersOnly!: string | number;
  // @Input() maxCount!: number | string;
  constructor() {}

  @HostListener('keypress', ['$event'])
  restrictNumbersOnly(event: KeyboardEvent) {
    const inputTag = event.target as HTMLInputElement;
    const length = this.appNumbersOnly ? Number(this.appNumbersOnly) : 10;
    const txtLength = inputTag.value.length;

    if (txtLength >= length || event.keyCode < 48 || event.keyCode > 57) {
      event.preventDefault();
    }
  }
}
