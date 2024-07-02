import { Route } from '@angular/router';
import { RoutesPrefix } from '@app/core/constants/routes';

export const appRoutes: Route[] = [
  {
    path: RoutesPrefix.AUTH,
    loadChildren: () => import('./modules/auth/routes/index').then((c) => c.authRoutes),
    canActivateChild: [],
  },
];
