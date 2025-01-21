import { Routes } from '@angular/router';
import { PATHS } from '../utils/paths';

export const routes: Routes = [
  {
    path: PATHS.home,
    loadComponent: () =>
      import('./layouts/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: PATHS.aboutUs,
    loadComponent: () =>
      import('./layouts/about-us/about-us.component').then((m) => m.AboutUsComponent),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: PATHS.home
  },
];
