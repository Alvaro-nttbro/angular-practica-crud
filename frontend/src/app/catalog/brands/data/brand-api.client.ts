import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Brand, Model } from '../../../../generated/api/swagger.types';

@Injectable({
  providedIn: 'root',
})
export class BrandApiClient {
  readonly #http = inject(HttpClient);
  readonly #baseUrl = '/api/brands';

  listBrands(): Observable<Brand[]> {
    return this.#http.get<Brand[]>(`${this.#baseUrl}`, {
      withCredentials: true,
    });
  }

  listBrandModels(brandId: string): Observable<Model[]> {
    return this.#http.get<Model[]>(`${this.#baseUrl}/${brandId}/models`, {
      withCredentials: true,
    });
  }
}
