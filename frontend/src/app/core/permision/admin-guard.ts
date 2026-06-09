import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Role } from '../../catalog/roles/roles.models';
import { SessionManager } from '../auth/session-manager';

export const adminGuard: CanActivateFn = () => {
  const auth = inject(SessionManager);
  const router = inject(Router);

  if (auth.currentUser()?.role === Role.ADMIN) {
    return true;
  }

  return router.createUrlTree(['/permision-denied']);
};
