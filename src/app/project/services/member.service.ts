import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as constants from 'app/shared/constants'


@Injectable()
export class MemberService {

  constructor(
    private http: HttpClient
  ) { }

  addMember (payload): Observable<any> {
    const url = constants.BASE_API + '/project/member'
    return this.http.post(url, payload)
  }
  
  exit (payload): Observable<any> {
    const url = constants.BASE_API + '/project/member/exit'
    return this.http.patch(url, payload)
  }

  manager (payload): Observable<any> {
    const url = constants.BASE_API + '/project/member/manager'
    return this.http.patch(url, payload)
  }

  searchUser (payload): Observable<any> {
    const url = constants.BASE_API + '/project/search/user'
    return this.http.get(url, { params: payload })
  }

  searchMember (payload): Observable<any> {
    const url = constants.BASE_API + '/project/search/member'
    return this.http.get(url, { params: payload })
  }

}
