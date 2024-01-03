import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import {
  getAnalytics,
  provideAnalytics,
  ScreenTrackingService,
} from "@angular/fire/analytics";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import {
  getRemoteConfig,
  provideRemoteConfig,
} from "@angular/fire/remote-config";
import { environment } from "../environments/environment";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp(environment.firebase),
      ),
    ),
    importProvidersFrom(provideAnalytics(() => getAnalytics())),
    ScreenTrackingService,
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(provideRemoteConfig(() => getRemoteConfig())),
  ],
};
