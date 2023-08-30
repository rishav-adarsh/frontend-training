import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserType } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user: UserType | null = null;
  private userSubject = new BehaviorSubject(this._user);
  userObservable: Observable<UserType | null> | undefined;

  constructor(private http: HttpClient) {
    this.userObservable = this.userSubject.asObservable();
    this.rehydrate();
  }

  rehydrate() {
    if(localStorage.getItem('user')) {
      this._user = JSON.parse(localStorage.getItem('user') as string);
      this.userSubject.next(this._user);
    }
  }

  logout() {
    localStorage.removeItem('user');
    this._user = null;
    this.userSubject.next(null);
  }

  isLoggedIn() {
    return !!this._user; // returns boolean if it's not null
  }

  createSession(user: UserType) {
    localStorage.setItem('user', JSON.stringify(user));
    this._user = user;
    this.userSubject.next(this._user);
  }

  login(email: string, password: string) {
    const apiKey = 'AIzaSyANB1Ajx3G9ikhFzYvQC4jLehxb990zYZE';
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
    const data = { email, password, returnSecureToken: true };
    return this.http.post<UserType>(url, data);
  }
}
