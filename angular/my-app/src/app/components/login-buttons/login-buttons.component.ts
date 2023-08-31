import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/user/services/auth.service';

@Component({
  selector: 'app-login-buttons',
  templateUrl: './login-buttons.component.html',
  styleUrls: ['./login-buttons.component.css']
})
export class LoginButtonsComponent {
  // Two ways of importing services
  // 1. using inject()
  // 2. parametrizing it into the constructor()
  authService = inject(AuthService);
  user$ = this.authService.userObservable;
}
