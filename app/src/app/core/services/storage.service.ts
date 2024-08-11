import { Injectable } from '@angular/core';
import { AUTH_USER_KEY } from '../constants/storage';
import { IStorageUser } from '../interfaces/auth';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  getUser(): IStorageUser | null {
    const user = sessionStorage.getItem(AUTH_USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  isLoggedIn(): boolean {
    const user = sessionStorage.getItem(AUTH_USER_KEY);
    return user ? true : false;
  }

  removeUser(): void {
    sessionStorage.removeItem(AUTH_USER_KEY);
  }

  setUser(user: IStorageUser): void {
    sessionStorage.removeItem(AUTH_USER_KEY);
    sessionStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
  }
}
