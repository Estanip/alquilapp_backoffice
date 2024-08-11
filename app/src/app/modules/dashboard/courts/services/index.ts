import { Injectable } from '@angular/core';
import { TApiResponse } from '@app/app/core/interfaces';
import { ApiRestService } from '@app/app/core/services/api-rest.service';
import { Observable } from 'rxjs';
import { ICourt } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class CourtService {
  private readonly _courtPrefix = 'court';

  constructor(private readonly _apiRestService: ApiRestService) {}

  create(data: ICourt): Observable<TApiResponse<{ success: boolean }>> {
    return this._apiRestService.post<TApiResponse<{ success: boolean }>>(`${this._courtPrefix}`, data);
  }

  edit(data: ICourt, id: string): Observable<TApiResponse<{ success: boolean }>> {
    return this._apiRestService.put<TApiResponse<{ success: boolean }>>(`${this._courtPrefix}/${id}`, data);
  }

  getAll(): Observable<TApiResponse<ICourt[]>> {
    return this._apiRestService.get<TApiResponse<ICourt[]>>(`${this._courtPrefix}`);
  }

  getById(_id: string): Observable<TApiResponse<ICourt>> {
    return this._apiRestService.get<TApiResponse<ICourt>>(`${this._courtPrefix}/${_id}`);
  }
}
