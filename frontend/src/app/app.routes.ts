import { Routes } from '@angular/router';
import { authGuard, noAuthGuard } from './core/auth/auth-guard';

export const APP_ROUTES: Routes = [
  {
    path: 'login',
    canActivate: [noAuthGuard],
    loadComponent: () => import('./features/login/login').then((m) => m.Login),
  },
  {
    path: 'permision-denied',
    loadComponent: () =>
      import('./core/permision/permision-denied/permision-denied').then((m) => m.PermisionDenied),
  },
  {
    path: '',
    canActivate: [authGuard],
    loadChildren: () => import('./core/shell/shell.routes').then((m) => m.SHELL_ROUTES),
  },
];
