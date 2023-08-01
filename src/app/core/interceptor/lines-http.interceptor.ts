import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CONTEXT } from 'src/app/data/schema/user-context';
import { GlobalConstants } from '../constants/global-constants';

@Injectable()
export class LinesHttpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {   
    request = request.clone({
      setHeaders: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': GlobalConstants.USER_CONTEXT.accessToken != '' ? 'Bearer ' + GlobalConstants.USER_CONTEXT.accessToken : ''
      }
    });

    return next.handle(request);
  }
}
