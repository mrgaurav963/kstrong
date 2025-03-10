import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../core/auth.service';

export const authRedirectGuard: CanActivateFn = (route, state) => {
  if (inject(AuthService).isAuthenticated()) {
    inject(Router).navigate(['/store']);
    return false;
  }
  return true;
};
