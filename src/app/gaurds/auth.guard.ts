import { CanActivateFn } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  return inject(AuthService).isAuthenticated();
  return true;
};
