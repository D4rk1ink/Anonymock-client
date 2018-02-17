import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as constants from 'app/shared/constants'


@Injectable()
export class EndpointService {

  constructor(
    private http: HttpClient
  ) { }

  create (payload): Observable<any> {
    const url = constants.BASE_API + '/project/endpoint'
    return this.http.post(url, payload)
  }

  getById (id): Observable<any> {
    const url = constants.BASE_API + '/project/endpoint/' + id
    return this.http.get(url)
  }

  search (payload): Observable<any> {
    const url = constants.BASE_API + '/project/search/endpoint'
    return this.http.get(url, { params: payload })
  }

}