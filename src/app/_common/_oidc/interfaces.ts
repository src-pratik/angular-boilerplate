export interface IOidcService {
    getUser(): Promise<any>;
    login(): Promise<void>;
    logout(): Promise<void>;
    renewToken(): Promise<any>;
}

export interface IOidcSettings {
    enabled: boolean;
    stsAuthority: string;
    clientId: string;
    clientRoot: string;
    responseType: string;
    clientScope: string;
    autoSilentRenew: boolean;
    redirectUri: string;
    slientRedirectUri: string;
    postLogoutUri: string;
}