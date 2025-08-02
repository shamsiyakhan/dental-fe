// src/app/auth.interceptor.ts
import { Injectable, NgZone } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private zone: NgZone
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.warn("Intercepting request:", req);
    const token = localStorage.getItem('token');
    console.warn("token", token)
    let authReq = req;
    if (token) {
      authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (
          (error.status === 401 && error.error.message === 'Invalid or expired token') ||
          (error.status === 403 && error.error.message === 'Unauthorized: Token missing')
        ) {
          // Redirect to login
          console.warn("error")
          this.zone.run(() => {
            console.warn("Redirecting to login");
            if(this.router.url !== 'admin') {
               this.router.navigate(['auth/admin-login']);
               Swal.fire({
                 icon: 'error',
                 title: 'Session Expired',
                 text: 'Please log in again to continue.',
                 confirmButtonText: 'Login'
               });
            }

          });

        }

        return throwError(() => error);
      })
    );
  }
}
