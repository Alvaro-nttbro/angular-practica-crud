import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDto, LoginResponseDto, UserProfileDto } from '../../../generated/api/swagger.types';

@Injectable({
  providedIn: 'root',
})
export class AuthApiClient {
  readonly #http = inject(HttpClient);
  readonly #baseUrl = '/api/auth';

  login(request: LoginDto): Observable<LoginResponseDto> {
    return this.#http.post<LoginResponseDto>(`${this.#baseUrl}/login`, request);
  }

  me(): Observable<UserProfileDto> {
    return this.#http.get<UserProfileDto>(`${this.#baseUrl}/me`);
  }

  refresh(): Observable<void> {
    return this.#http.post<void>(`${this.#baseUrl}/refresh`, {});
  }

  logout(): Observable<void> {
    return this.#http.post<void>(`${this.#baseUrl}/logout`, null);
  }
}
