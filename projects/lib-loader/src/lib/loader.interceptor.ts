import { Injectable, Inject } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { LoaderService } from './loader.service';
import { LoaderConfig } from './model';
@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(@Inject(LoaderConfig) private config: LoaderConfig, private loaderService: LoaderService) {
    if (!this.config.debugMode)
      return;
    console.log('Loader interceptor initialized.', this.config.matchPattern, this.config.enabled)
  }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.config.enabled)
      return next.handle(req);

    this.loaderService.show();

    if (this.config.matchPattern !== null || this.config.matchPattern !== undefined) {
      const matches = this.config.matchPattern.some(pattern => pattern.test(req.url));

      if (this.config.debugMode)
        console.log('Loader Interceptor trying to match url with patterns provided', req.url, matches)
    }

    return next.handle(req).pipe(
      finalize(() => {
        this.loaderService.hide();
        console.log('Loader interceptor finalize');
      }), catchError((e) => throwError(() => e))
    );
  }
}
