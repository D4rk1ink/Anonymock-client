import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http'
import * as database from 'app/core/services/database.service'

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = database.getToken()
    const project = database.getProject()
    const authReq = req.clone({
      headers: req.headers.set('Authorization', token).set('projectId', project)
    })
    return next.handle(authReq)
  }

}
