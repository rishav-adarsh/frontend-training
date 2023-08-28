import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root', // equivalent of adding it in app.module.ts providers
})
export class CurrencyService {
  private _code: string = 'INR';
  private currencySubject = new BehaviorSubject<string>(this._code);
  currencyObservable = this.currencySubject.asObservable(); // to get the currency code, one needs to be subscribed to this observable

  constructor(private http: HttpClient) {
    this.rehydrate();
  }

  checkNgetData() {
    if (localStorage.getItem('resData')) {
      return JSON.parse(localStorage.getItem('resData') as string);
    }

    this.getForexData();
  }

  getValueByCode(code: string) {}

  getForexData() {
    const url =
      'https://api.forexrateapi.com/v1/latest?api_key=db7f4ee9732474fcea1e9169a8571de0&base=INR';
    return this.http.get(url).pipe(      
      map((data: any) => {
        console.log(data.rates);
        return { data : data.rates, codes: Object.keys(data.rates) };
      })
    );
  }

  rehydrate() {
    if (localStorage.getItem('currency')) {
      this._code = localStorage.getItem('currency') as string;
      this.currencySubject.next(this._code);
    }
  }

  // to make data changes
  updateCurrency(code: string) {
    this._code = code;
    this.persistNnotifyData();
  }

  persistNnotifyData() {
    localStorage.setItem('currency', this._code);
    // on every data change, we should give a notification
    this.currencySubject.next(this._code);
  }
}
