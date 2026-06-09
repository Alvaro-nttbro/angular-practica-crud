import { Routes } from '@angular/router';
import { adminGuard } from '../permision/admin-guard';

export const SHELL_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./shell').then((m) => m.Shell),
    children: [
      {
        path: '',
        loadComponent: () => import('../../features/home/home').then((m) => m.Home),
      },
      {
        path: 'cars-list',
        loadComponent: () => import('../../features/cars-list/cars-list').then((m) => m.CarsList),
      },
      {
        path: 'cars-form',
        canActivate: [adminGuard],
        loadComponent: () => import('../../features/cars-form/cars-form').then((m) => m.CarsForm),
      },
      {
        path: '**',
        loadComponent: () => import('../../features/not-found/not-found').then((m) => m.NotFound),
      },
    ],
  },
];
