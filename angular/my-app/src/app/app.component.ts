import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  currencyCode!: string;
  count: number = 6;

  fetchCurrency(event: string) {
    console.log(event);
    this.currencyCode = event
  }
}
