import { Routes } from '@angular/router';
import { RegisterComponent } from '@app/app/pages/register/register.component';
import { LoginComponent } from '@app/pages/login/login.component';

export const authRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];
