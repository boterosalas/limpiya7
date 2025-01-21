import { Routes } from '@angular/router';
import { PATHS } from '../utils/paths';

export const routes: Routes = [
  {
    path: PATHS.home,
    pathMatch: 'full',
    loadComponent: () =>
      import('./layouts/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: PATHS.aboutUs,
    pathMatch: 'full',
    loadComponent: () =>
      import('./layouts/about-us/about-us.component').then((m) => m.AboutUsComponent),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/limpiya7'
  },
];
