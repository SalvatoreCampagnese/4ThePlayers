import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { from, Observable } from 'rxjs';

import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!request.url.includes('/login')) {
      return from(this.handleAuth(request, next));
    }
    return next.handle(request);
  }

  async handleAuth(request: HttpRequest<unknown>, next: HttpHandler) {
    const token = await Storage.get({ key: "token" });
    request = request.clone({
      setHeaders: { 'Authorization': `Bearer ${token.value}` }
    });
    return next.handle(request).toPromise();
  }
}