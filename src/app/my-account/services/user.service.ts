import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http'
import * as constants from 'app/shared/constants'

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getById (id): Observable<any> {
    const url = constants.BASE_API + '/user/' + id
    return this.http.get(url)
  }

  update (id, payload): Observable<any> {
    const url = constants.BASE_API + '/user/' + id
    return this.http.patch(url, payload)
  }

  uploadPicture (id, payload): Observable<any> {
    const url = constants.BASE_API + '/user/' + id + '/picture'
    return this.http.patch(url, payload)
  }

  changePassword (id, payload): Observable<any> {
    const url = constants.BASE_API + '/user/' + id + '/change-password'
    return this.http.patch(url, payload)
  }

}
