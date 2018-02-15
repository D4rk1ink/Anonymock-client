import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
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

  getById (id): Observable<any> {
    const url = constants.BASE_API + '/project/response/' + id
    return this.http.get(url)
  }

  search (payload): Observable<any> {
    const url = constants.BASE_API + '/project/search/response'
    return this.http.get(url, { params: payload })
  }

}
