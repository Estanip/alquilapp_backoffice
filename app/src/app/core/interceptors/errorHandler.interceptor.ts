import { HttpErrorResponse, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesPaths } from '@app/app/core/constants/routes';
import { AuthService } from '@app/app/modules/auth/services';
import { catchError, throwError } from 'rxjs';

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export const errorHandlerInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  const authService = Inject(AuthService);
  const router = Inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error instanceof HttpErrorResponse) {
        if (error.status === 401) {
          console.error('Unauthorized request:', error);
          authService.logout();
          router.navigate(RoutesPaths.AUTH.LOGIN);
        } else console.error('HTTP error:', error);
      } else console.error('An error occurred:', error);

      return throwError(() => {
        return { code: error?.status, message: error?.error?.message || error?.message };
      });
    })
  );
};
