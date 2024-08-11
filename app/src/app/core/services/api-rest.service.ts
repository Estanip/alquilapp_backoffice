import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@app/environments/environment.development';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class ApiRestService {
  private readonly _apiURL = environment.apiUrlBase;

  constructor(private _httpClient: HttpClient, private readonly _storageService: StorageService) {}

  get<T>(route: string): Observable<T> {
    return this._httpClient.get<T>(`${this._apiURL}/${route}`);
  }

  post<T>(route: string, body: object): Observable<T> {
    return this._httpClient.post<T>(`${this._apiURL}/${route}`, body);
  }

  put<T>(route: string, body: object): Observable<T> {
    return this._httpClient.put<T>(`${this._apiURL}/${route}`, body);
  }
}
