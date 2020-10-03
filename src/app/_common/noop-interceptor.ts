import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

@Injectable()
export class NoopInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {

        console.log(req);
        /** Pass untouched request through to the next request handler. */
        return next.handle(req);
    }
}

//Optional
export const NoopProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: NoopInterceptor,
    multi: true
};