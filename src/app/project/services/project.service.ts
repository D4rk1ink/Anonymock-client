import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as constants from 'app/shared/constants'

@Injectable()
export class ProjectService {

  constructor(
    private http: HttpClient
  ) { }

  get (vid = ''): Observable<any> {
    const url = constants.BASE_API + '/project/' + vid
    return this.http.get(url)
  }

  create (payload): Observable<any> {
    const url = constants.BASE_API + '/project'
    return this.http.post(url, payload)
  }
}
