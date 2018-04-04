import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as constants from 'app/shared/constants'

@Injectable()
export class ScraperService {

  constructor(
    private http: HttpClient
  ) { }

  createEndpoint (payload): Observable<any> {
    const url = constants.BASE_API + '/project/scraper/endpoint'
    return this.http.post(url, payload)
  }

  createRequest (payload): Observable<any> {
    const url = constants.BASE_API + '/project/scraper/request'
    return this.http.post(url, payload)
  }

  update (id, payload): Observable<any> {
    const url = constants.BASE_API + '/project/scraper/' + id
    return this.http.patch(url, payload)
  }

  search (payload): Observable<any> {
    const url = constants.BASE_API + '/project/search/scraper'
    return this.http.get(url, { params: payload })
  }

}
