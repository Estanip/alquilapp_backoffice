import { Injectable, inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { RoutesPaths } from '@app/app/core/constants/routes';
import { AuthService } from '@app/app/modules/auth/services';

@Injectable({
  providedIn: 'root',
})
class AuthGuarddService {
  constructor(private readonly _authService: AuthService, private readonly _router: Router) {}

  canActivate(): boolean {
    if (this._authService.isAuthenticated()) {
      this._router.navigate([RoutesPaths.DASHBOARD.HOME]);
      return false;
    }
    return true;
  }
}

export const IsLoggedGuard: CanActivateChildFn = (): boolean => {
  return inject(AuthGuarddService).canActivate();
};
