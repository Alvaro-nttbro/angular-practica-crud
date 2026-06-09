import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SessionManager } from '../auth/session-manager';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  readonly #sessionManager = inject(SessionManager);
  readonly #router = inject(Router);

  readonly user = this.#sessionManager.currentUser;

  logout() {
    console.log('Logout');
    this.#sessionManager.logout().subscribe(() => {
      this.#router.navigate(['/login']);
    });
  }
}
