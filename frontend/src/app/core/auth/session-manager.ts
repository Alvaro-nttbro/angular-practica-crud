import { HttpErrorResponse } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { catchError, EMPTY, map, Observable, switchMap, tap } from 'rxjs';
import { AuthDataAccess } from './auth.data-access';
import { AuthUser, LoginCredentials } from './auth.models';

@Injectable({
  providedIn: 'root',
})
export class SessionManager {
  readonly #api = inject(AuthDataAccess);
  readonly #currentUser = signal<AuthUser | null>(null);

  readonly isAuthenticated = computed(() => this.#currentUser() !== null);
  readonly currentUser = this.#currentUser.asReadonly();

  initSession(): Observable<void> {
    return this.#api.me().pipe(
      tap((user) => this.#currentUser.set(user)),
      catchError((err: unknown) => {
        if (err instanceof HttpErrorResponse && (err.status === 0 || err.status >= 500)) {
          console.error('Server error while initializing session:', err);
        } else {
          this.clearSession();
        }
        return EMPTY;
      }),
      map(() => undefined),
    );
  }

  login(credentials: LoginCredentials): Observable<AuthUser> {
    return this.#api.login({ email: credentials.email, password: credentials.password }).pipe(
      switchMap(() => this.#api.me()),
      tap((user) => this.#currentUser.set(user)),
    );
  }

  logout(): Observable<void> {
    return this.#api.logout().pipe(
      tap(() => this.clearSession()),
      catchError(() => {
        this.clearSession();
        return EMPTY;
      }),
    );
  }

  clearSession(): void {
    this.#currentUser.set(null);
  }
}
