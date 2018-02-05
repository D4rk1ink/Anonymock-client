import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http'
import * as constants from 'app/shared/constants'

@Injectable()
export class MemberService {

  constructor(
    private http: HttpClient
  ) { }

  getMembers (): Observable<any> {
    const url = constants.BASE_API + '/user'
    return this.http.get(url)
  }

  approve (payload): Observable<any> {
    const url = constants.BASE_API + '/user/approve'
    return this.http.patch(url, payload)
  }

  admin (payload): Observable<any> {
    const url = constants.BASE_API + '/user/admin'
    return this.http.patch(url, payload)
  }

  deactivate (payload): Observable<any> {
    const url = constants.BASE_API + '/user/deactivate'
    return this.http.patch(url, payload)
  }

}
