import { HttpEvent, HttpHandlerFn, HttpHeaders, HttpRequest } from '@angular/common/http';
import { AUTH_USER_KEY } from '@app/app/core/constants/storage';
import { Observable } from 'rxjs';

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export const authInterceptor = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  if (!req.url.includes('/login')) {
    const user = sessionStorage.getItem(AUTH_USER_KEY);
    const token = JSON.parse(user as string).token;
    if (token) headers = headers.set('Authorization', `Bearer ${token}`);
  }

  req = req.clone({ headers });
  return next(req);
};
