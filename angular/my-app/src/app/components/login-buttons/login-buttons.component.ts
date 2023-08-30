import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/user/services/auth.service';

@Component({
  selector: 'app-login-buttons',
  templateUrl: './login-buttons.component.html',
  styleUrls: ['./login-buttons.component.css']
})
export class LoginButtonsComponent {
  authService = inject(AuthService);
  user$ = this.authService.userObservable;
}
