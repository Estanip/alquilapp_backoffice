import { Routes } from '@angular/router';
import { HomeComponent } from '@app/app/pages/home/home.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'courts',
    component: HomeComponent,
  },
  {
    path: 'users',
    component: HomeComponent,
  },
];
