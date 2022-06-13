import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, Observable } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { StoreKeys } from './config-keys';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(  private toastr: ToastrService) {}

  intercept(req: HttpRequest<any>,next: HttpHandler ): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem(StoreKeys.Token);
    let authReq = req.clone();
    if (token) {
      req = req.clone({ setHeaders: { Authorization: `Bearer ${atob(token)}` } });
    }

    return next.handle(req).pipe(
      catchError((err) => {
        this.toastr.error(err.error)
        console.log(err);
        return EMPTY;
      }),
      finalize(() => {})
    );
  }
}
