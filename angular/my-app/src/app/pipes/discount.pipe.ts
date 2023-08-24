import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  // value | discount : arg1 : arg2
  // transform function gets called only when any of the arguments gets changed
  transform(value: number) {
    console.log('pipe invoked');
    return '80% off';
  }

}
