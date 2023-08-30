import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from '../loader/loader.service';

// req => interceptor => server => interceptor => resp
// { providedIn: 'root' } not present, need to define in providers in app.module.ts
// Interceptor is not called by us, it's called automatically whenever we make a request
@Injectable()
export class HttpLoaderInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('request intercepted :', request.url);
    this.loaderService.showLoader();
    // finalize() will be called when the request got finalized
    return next.handle(request).pipe(finalize(() => this.loaderService.hideLoader()));
  }
}
