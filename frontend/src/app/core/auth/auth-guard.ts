import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SessionManager } from './session-manager';

export const authGuard: CanActivateFn = () => {
  const auth = inject(SessionManager);
  const router = inject(Router);

  if (auth.isAuthenticated()) {
    return true;
  }

  return router.createUrlTree(['/login']);
};

export const noAuthGuard: CanActivateFn = () => {
  const auth = inject(SessionManager);
  const router = inject(Router);

  if (!auth.isAuthenticated()) {
    return true;
  }

  return router.createUrlTree(['/']);
};
