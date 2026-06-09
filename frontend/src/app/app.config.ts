import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { APP_ROUTES } from './app.routes';
import { SessionManager } from './core/auth/session-manager';
import { credentialsInterceptor } from './core/http/interceptors/credentials-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(APP_ROUTES),
    provideAppInitializer(() => inject(SessionManager).initSession()),
    provideHttpClient(withInterceptors([credentialsInterceptor])),
  ],
};
