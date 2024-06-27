import { Routes } from '@angular/router';
import { LoginComponent } from '@app/pages/login/login.component';

export const authRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
];
