import { Injectable, EventEmitter } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import * as constants from 'app/shared/constants'


@Injectable()
export class EndpointService {

  public onHeight: EventEmitter<number>

  constructor(
    private http: HttpClient
  ) {
    this.onHeight = new EventEmitter<number>()
  }

  create (payload): Observable<any> {
    const url = constants.BASE_API + '/project/endpoint'
    return this.http.post(url, payload)
  }

  update (id, payload): Observable<any> {
    const url = constants.BASE_API + '/project/endpoint/' + id
    return this.http.patch(url, payload)
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
