import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './_http-interceptors';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { OidcTestComponent } from './_common/_oidc/oidc-test/oidc-test.component';
import { OidcService } from './_common/_oidc';

@NgModule({
  declarations: [
    AppComponent,
    OidcTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    httpInterceptorProviders,
    { provide: 'oidcsettings', useValue: environment.oidcSettings },
    OidcService
  ],
  bootstrap: [AppComponent, OidcTestComponent]
})
export class AppModule { }
