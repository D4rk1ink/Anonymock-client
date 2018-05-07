import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs/Observable'
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http'
import 'rxjs/add/operator/do'
import * as database from 'app/core/services/database.service'

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(
    private router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = database.getToken() || ''
    const project = database.getProject() || ''
    const authReq = req.clone({
      headers: req.headers.set('Authorization', token).set('projectId', project)
    })
    return next.handle(authReq).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        return event
      }         
    }, (err: HttpErrorResponse) => {
      if (err instanceof HttpErrorResponse && err.status === 401) {
        this.router.navigateByUrl('/auth/sign-in')
      } else {
        return event
      }
    })
  }

}
