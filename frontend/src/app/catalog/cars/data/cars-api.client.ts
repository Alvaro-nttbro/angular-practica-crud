import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Car, PaginatedResponseDto } from '../../../../generated/api/swagger.types';

@Injectable({
  providedIn: 'root',
})
export class CarsApiClient {
  readonly #http = inject(HttpClient);
  readonly #baseUrl = '/api/cars';

  listPaginated(page: number, limit: number): Observable<PaginatedResponseDto> {
    return this.#http.get<PaginatedResponseDto>(`${this.#baseUrl}?page=${page}&limit=${limit}`);
  }

  list(): Observable<Car[]> {
    return this.#http.get<Car[]>(this.#baseUrl);
  }

  create() {}

  update() {}

  delete() {}
}
