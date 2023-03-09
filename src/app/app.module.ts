import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './_http-interceptors';
import { HttpClientModule } from '@angular/common/http';

import * as LibraryLoader from 'projects/lib-loader/src/public-api';

const loaderConfigProvider: Provider = {
  provide: LibraryLoader.LoaderConfig,
  useValue: { enabled: true, debugMode: true, matchPattern: [/\/api\//] },
};


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LibraryLoader.LoaderModule
  ],
  providers: [httpInterceptorProviders, loaderConfigProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
