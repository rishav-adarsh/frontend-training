import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyService } from '../services/currency.service';

@Pipe({
  name: 'conversion',
})
export class ConversionPipe implements PipeTransform {
  constructor(private currencyService: CurrencyService) {}

  // price | conversion : 'USD'
  // a pipe should return something always
  transform(value: number, code: string = 'INR') {
    if (isNaN(value)) return null;
    else {
      // switch (code) {
      //   case 'USD':
      //     return (value *= 0.012);
      //   case 'EUR':
      //     return (value *= 0.011);
      //   case 'GBP':
      //     return (value *= 0.0096);
      //   default:
      //     return value;
      // }
      try {
        let resData: any = localStorage.getItem('resData') as string;
        resData = JSON.parse(resData);
        return value * resData.data[code];
      } catch {
        return value;
      }
    }
  }
}
