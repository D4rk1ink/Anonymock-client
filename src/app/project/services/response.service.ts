import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import * as constants from 'app/shared/constants'


@Injectable()
export class ResponseService {

  constructor(
    private http: HttpClient
  ) { }

  create (payload): Observable<any> {
    const url = constants.BASE_API + '/project/response'
    return this.http.post(url, payload)
  }

  update (id, payload): Observable<any> {
    const url = constants.BASE_API + '/project/response/' + id
    return this.http.patch(url, payload)
  }

  getById (id): Observable<any> {
    const url = constants.BASE_API + '/project/response/' + id
    return this.http.get(url)
  }

  search (payload): Observable<any> {
    const url = constants.BASE_API + '/project/search/response'
    return this.http.get(url, { params: payload })
  }

  default (id): Observable<any> {
    const url = constants.BASE_API + '/project/response/' + id + '/default'
    return this.http.patch(url, {})
  }

  delete (id): Observable<any> {
    const url = constants.BASE_API + '/project/response/' + id
    return this.http.delete(url)
  }

}
