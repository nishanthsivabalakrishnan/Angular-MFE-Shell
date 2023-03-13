import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../Services/Authentication/authentication.service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(public auth: AuthenticationService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if(this.auth.RetriveJWTToken()){
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.RetriveJWTToken()}`,
        'Access-Control-Allow-Origin' : '*'
      }
    });
  }
  else{
    request = request.clone({
      setHeaders: {
        'Access-Control-Allow-Origin' : '*'
      }
    });
  }
    return next.handle(request);
  }
}
