import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import * as constants from 'app/shared/constants'

@Injectable()
export class ScraperService {

  constructor(
    private http: HttpClient
  ) { }

  getDetail (): Observable<any> {
    const url = constants.BASE_API + '/project/scraper'
    return this.http.get(url)
  }

  createEndpoint (): Observable<any> {
    const url = constants.BASE_API + '/project/scraper/endpoint'
    return this.http.post(url, {})
  }

  createRequest (payload): Observable<any> {
    const url = constants.BASE_API + '/project/scraper/request'
    return this.http.post(url, payload)
  }

  updateScraper (payload): Observable<any> {
    const url = constants.BASE_API + '/project/scraper'
    return this.http.patch(url, payload)
  }

  updateEndpoint (id, payload): Observable<any> {
    const url = constants.BASE_API + '/project/scraper/endpoint/' + id
    return this.http.patch(url, payload)
  }

  setDefault (id): Observable<any> {
    const url = constants.BASE_API + '/project/scraper/request/' + id + '/default'
    return this.http.patch(url, {})
  }

  deleteEndpoint (id): Observable<any> {
    const url = constants.BASE_API + '/project/scraper/endpoint/' + id
    return this.http.delete(url)
  }

  deleteRequest (id): Observable<any> {
    const url = constants.BASE_API + '/project/scraper/request/' + id
    return this.http.delete(url)
  }

  search (payload): Observable<any> {
    const url = constants.BASE_API + '/project/search/scraper'
    return this.http.get(url, { params: payload })
  }

}
