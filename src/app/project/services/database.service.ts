import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as constants from 'app/shared/constants'

@Injectable()
export class DatabaseService {

  constructor(
    private http: HttpClient
  ) { }

  get (payload): Observable<any> {
    const url = constants.BASE_API + '/project/database'
    return this.http.post(url, payload)
  }

  generate (payload): Observable<any> {
    const url = constants.BASE_API + '/project/database/generate'
    return this.http.post(url, payload)
  }

  import (payload): Observable<any> {
    const url = constants.BASE_API + '/project/database/import'
    return this.http.post(url, payload)
  }

}
