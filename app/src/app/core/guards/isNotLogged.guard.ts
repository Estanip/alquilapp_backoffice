import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { RoutesPaths } from '@app/app/core/constants/routes';
import { AuthService } from '@app/app/modules/auth/services';

@Injectable({
  providedIn: 'root',
})
class AuthGuardService {
  constructor(private readonly _authService: AuthService, private readonly _router: Router) {}

  canActivate(): boolean {
    if (!this._authService.isAuthenticated()) {
      this._router.navigate([RoutesPaths.AUTH.LOGIN]);
      return false;
    }
    return true;
  }
}

export const IsNotLoggedGuard: CanActivateFn = (): boolean => {
  return inject(AuthGuardService).canActivate();
};
