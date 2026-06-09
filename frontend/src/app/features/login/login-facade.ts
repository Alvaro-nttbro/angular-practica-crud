import { inject, Injectable, signal } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionManager } from '../../core/auth/session-manager';

@Injectable()
export class LoginFacade {
  readonly #session = inject(SessionManager);
  readonly #router = inject(Router);
  readonly #fb = inject(NonNullableFormBuilder);

  readonly isLoading = signal(false);
  readonly loginError = signal<string | null>(null);

  readonly form = this.#fb.group({
    email: this.#fb.control('', [Validators.required, Validators.email]),
    password: this.#fb.control('', [Validators.required]),
  });

  submit() {
    if (this.form.invalid) {
      console.log('Form is invalid');
      this.form.markAllAsTouched();
      return;
    }

    if (this.isLoading()) {
      console.log('Login already in progress');
      return;
    }

    console.log('Submitting login with email:', this.form.get('email')?.value);
    this.isLoading.set(true);
    this.loginError.set(null);
    this.form.disable();

    const { email, password } = this.form.getRawValue();

    this.#session.login({ email, password }).subscribe({
      next: () => {
        console.log('Login successful');
        this.#router.navigate(['']);
      },
      error: (err) => {
        this.loginError.set('Login failed. Please check your credentials and try again.');
        console.error('Login error:', err);
        this.isLoading.set(false);
        this.form.enable();
      },
    });
  }
}
