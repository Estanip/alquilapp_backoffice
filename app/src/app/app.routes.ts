import { Route } from '@angular/router';
import { RoutesPaths, RoutesPrefix } from '@app/core/constants/routes';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: RoutesPaths.AUTH.LOGIN,
    pathMatch: 'full',
  },
  {
    path: RoutesPrefix.AUTH,
    loadChildren: () => import('./modules/auth/routes/index').then((c) => c.authRoutes),
    canActivateChild: [],
  },
];
