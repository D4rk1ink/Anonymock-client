import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/observable'
import * as constants from 'app/shared/constants'

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  signin (payload): Observable<any> {
    const url = constants.BASE_API + '/auth/signin'
    return this.http.post(url, payload)
  }

  signup (payload): Observable<any> {
    const url = constants.BASE_API + '/auth/signup'
    return this.http.post(url, payload)
  }

}
