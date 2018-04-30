import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import * as constants from 'app/shared/constants'

@Injectable()
export class LogService {

  constructor(
    private http: HttpClient
  ) { }

  search (payload): Observable<any> {
    const url = constants.BASE_API + '/project/search/log'
    return this.http.get(url, { params: payload })
  }

}
