import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  // Zone-based change detection: the app relies on NgZone.run and zone-triggered updates.
  providers: [provideZoneChangeDetection(), provideClientHydration()],
};
