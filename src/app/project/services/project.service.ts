import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import * as constants from 'app/shared/constants'

@Injectable()
export class ProjectService {

  constructor(
    private http: HttpClient
  ) { }

  get (id = ''): Observable<any> {
    const url = constants.BASE_API + '/project/main/' + id
    return this.http.get(url)
  }

  create (payload): Observable<any> {
    const url = constants.BASE_API + '/project/main'
    return this.http.post(url, payload)
  }

  update (id, payload): Observable<any> {
    const url = constants.BASE_API + '/project/main/' + id
    return this.http.patch(url, payload)
  }

  delete (id): Observable<any> {
    const url = constants.BASE_API + '/project/main/' + id
    return this.http.delete(url)
  }
}
