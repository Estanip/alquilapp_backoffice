import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RoutesPaths } from '@app/app/core/constants/routes';
import { TApiResponse } from '@app/app/core/interfaces';
import { ApiRestService } from '@app/app/core/services/api-rest.service';
import { StorageService } from '@app/app/core/services/storage.service';
import { AlertDialogComponent } from '@app/app/shared/components/dialog/alert/alert.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { IAuthUser } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginSubject = new BehaviorSubject<boolean>(false);
  loginStatus$ = this.loginSubject.asObservable();

  constructor(
    private readonly _jwtHelper: JwtHelperService,
    private readonly _apiRestService: ApiRestService,
    private readonly _storageService: StorageService,
    private readonly _dialog: MatDialog,
    private readonly _router: Router
  ) {}

  getToken(): string | undefined {
    return this._storageService.getUser()?.token;
  }

  isAuthenticated(): boolean {
    const user: IAuthUser | null = this._storageService.getUser();
    return user ? !this._jwtHelper.isTokenExpired(user?.token) : false;
  }

  login(email: string, password: string) {
    const apiResponse: Observable<TApiResponse<IAuthUser>> = this._apiRestService.post(RoutesPaths.AUTH.LOGIN, {
      email,
      password,
    });
    return apiResponse.subscribe({
      next: (response) => {
        if (response.success) {
          this._storageService.setUser(response.data as IAuthUser);
          this._router.navigate([RoutesPaths.DASHBOARD.HOME]);
          this.loginSubject.next(true);
        }
      },
      error: (error) => this._returnMessageError(error.message),
    });
  }

  logout() {
    this._storageService.removeUser();
    this.loginSubject.next(false);
  }

  private _returnMessageError(messageError: string | string[]) {
    let message: string | null;

    if (messageError.includes('Incorrect password') || messageError.includes('Invalid password format'))
      message = 'Contraseña incorrecta';
    else if (messageError.includes('Invalid email format') || messageError.includes('email must be an email'))
      message = 'Revisa el email ingresado';
    else message = null;

    if (message)
      this._dialog.open(AlertDialogComponent, {
        data: { message, buttonText: 'Cerrar' },
      });
  }
}
