import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from 'projects/lib-loader/src/public-api';
import { NoopInterceptor } from '../_common/noop-interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
];