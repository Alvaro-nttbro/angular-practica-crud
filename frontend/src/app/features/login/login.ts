import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFacade } from './login-facade';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './loginV1.html',
  styleUrl: './login.css',
  providers: [LoginFacade],
})
export class Login {
  readonly #loginFacade = inject(LoginFacade);

  readonly isLoading = this.#loginFacade.isLoading;
  readonly loginError = this.#loginFacade.loginError;
  readonly form = this.#loginFacade.form;

  submit() {
    console.log('Login submitted');
    this.#loginFacade.submit();
  }
}
