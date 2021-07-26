// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { IOidcSettings } from 'src/app/_common/_oidc';

export const environment = {
  appVersion: require('../../package.json').version,
  production: false,
  name: "local",
  oidcSettings: <IOidcSettings>{
    autoSilentRenew: true,
    stsAuthority: 'http://localhost:5000/',
    clientId: 'ng',
    clientRoot: 'http://localhost:4200/',
    responseType: 'code',
    clientScope: 'openid profile api1',
    redirectUri: "http://localhost:4200/oidc/signin-callback.html",
    postLogoutUri: "http://localhost:4200/",
    slientRedirectUri: "http://localhost:4200/oidc/silent-callback.html",
    enabled: true
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
