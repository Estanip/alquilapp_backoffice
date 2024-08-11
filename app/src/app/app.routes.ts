import { Route } from '@angular/router';
import { RoutesPaths, RoutesPrefix } from '@app/app/core/constants/routes';
import { IsLoggedGuard } from '@app/app/core/guards/isLogged.guard';
import { IsNotLoggedGuard } from '@app/app/core/guards/isNotLogged.guard';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: RoutesPaths.AUTH.LOGIN,
    pathMatch: 'full',
  },
  {
    path: RoutesPrefix.AUTH,
    loadChildren: () => import('./modules/auth/routes/index').then((c) => c.authRoutes),
    canActivateChild: [IsLoggedGuard],
  },
  {
    path: RoutesPrefix.DASHBOARD,
    loadChildren: () => import('./modules/dashboard/routes/index').then((c) => c.dashboardRoutes),
    canActivateChild: [IsNotLoggedGuard],
  },
];
