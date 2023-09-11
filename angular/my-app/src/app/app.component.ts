import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';

  constructor(private activeRoute: ActivatedRoute, private router: Router) {}

  // currencyCode!: string;
  // count: number = 6;

  // fetchCurrency(event: string) {
  //   console.log(event);
  //   this.currencyCode = event
  // }
}