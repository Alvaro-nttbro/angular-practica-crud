import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { LoginDto, LoginResponseDto, UserProfileDto } from '../../../generated/api/swagger.types';
import { AuthApiClient } from './auth-api.client';
import { AuthUser } from './auth.models';

function mapUser(vo: UserProfileDto): AuthUser {
  return {
    id: vo.id,
    name: vo.name,
    email: vo.email,
    role: vo.role,
  };
}

@Injectable({
  providedIn: 'root',
})
export class AuthDataAccess {
  readonly #client = inject(AuthApiClient);

  login(request: LoginDto): Observable<LoginResponseDto> {
    return this.#client.login(request);
  }

  me(): Observable<AuthUser> {
    return this.#client.me().pipe(map(mapUser));
  }

  refresh(): Observable<void> {
    return this.#client.refresh();
  }

  logout(): Observable<void> {
    return this.#client.logout();
  }
}
