import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
})
export class CurrencyComponent implements OnInit {
  codes = ['INR', 'USD', 'EUR', 'GBP'];
  data$!: Observable<Object>;
  // @Output() currencySelected = new EventEmitter();

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    if (localStorage.getItem('resData')) {
      let resData = JSON.parse(localStorage.getItem('resData') as string)
      console.log("here", resData, resData.data['USD']);
      this.codes = JSON.parse(localStorage.getItem('resData') as string).codes;
    } else {
      this.getData();
    }
  }

  getSelectedCode(event: Event) {
    const ele = event.target as HTMLSelectElement;
    // this.currencySelected.emit(ele.value);
    this.currencyService.updateCurrency(ele.value);
  }

  getData() {
    this.currencyService.getForexData().subscribe(
      (data) => {
        console.log('success');
        this.codes = data.codes;
        localStorage.setItem('resData', JSON.stringify(data));
      },
      (err) => {
        console.log("error",err);
      }
    );
  }
}
