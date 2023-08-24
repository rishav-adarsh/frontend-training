import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent {
  codes = ['INR', 'USD', 'EUR', 'GBP']
  @Output() currencySelected = new EventEmitter();

  getSelectedCode(event: Event) {
    const ele = event.target as HTMLSelectElement;
    this.currencySelected.emit(ele.value);
  }
}
