import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import * as constants from 'app/shared/constants'


@Injectable()
export class MemberService {

  constructor(
    private http: HttpClient
  ) { }

  addMember (id): Observable<any> {
    const url = constants.BASE_API + '/project/member/' + id
    return this.http.post(url, {})
  }

  exit (id): Observable<any> {
    const url = constants.BASE_API + '/project/member/' + id + '/exit'
    return this.http.patch(url, {})
  }

  manager (id, payload): Observable<any> {
    const url = constants.BASE_API + '/project/member/' + id + '/manager'
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
