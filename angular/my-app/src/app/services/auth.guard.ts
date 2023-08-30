import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../user/services/auth.service';

export const authGuard: CanActivateFn = (route, state) => { 
  const status = inject(AuthService).isLoggedIn();
  const router = inject(Router);
  if(!status)
    router.navigateByUrl('user/login');

  return status;
};
