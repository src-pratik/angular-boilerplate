import { Inject, Injectable } from '@angular/core';
import { User, UserManager } from 'oidc-client';
import { IOidcService, IOidcSettings } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class OidcService implements IOidcService {

  userManager: UserManager;

  constructor(@Inject('oidcsettings') oidcSettings: IOidcSettings) {
    const settings = {
      authority: oidcSettings.stsAuthority,
      client_id: oidcSettings.clientId,
      redirect_uri: oidcSettings.redirectUri,
      silent_redirect_uri: oidcSettings.slientRedirectUri,
      post_logout_redirect_uri: oidcSettings.postLogoutUri,
      response_type: oidcSettings.responseType,
      scope: oidcSettings.clientScope,
      automaticSilentRenew: oidcSettings.autoSilentRenew
    };
    this.userManager = new UserManager(settings);
  }

  public getUser(): Promise<User> {
    return this.userManager.getUser();
  }

  public login(): Promise<void> {
    return this.userManager.signinRedirect();
  }

  public renewToken(): Promise<User> {
    return this.userManager.signinSilent();
  }

  public logout(): Promise<void> {
    return this.userManager.signoutRedirect();
  }
}
