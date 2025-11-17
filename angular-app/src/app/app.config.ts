import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AproposComponent } from './apropos/apropos.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'apropos', component: AproposComponent }
    ])
  ]
};
