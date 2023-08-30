import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loaderSubject = new BehaviorSubject(false);
  loaderObservable = this.loaderSubject.asObservable();

  constructor() { }

  hideLoader() {
    this.loaderSubject.next(false);
  }

  showLoader() {
    this.loaderSubject.next(true);
  }
}
