import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as constants from 'app/shared/constants'


@Injectable()
export class FolderService {

  constructor(
    private http: HttpClient
  ) { }

  create (payload): Observable<any> {
    const url = constants.BASE_API + '/project/folder'
    return this.http.post(url, payload)
  }

  search (payload): Observable<any> {
    const url = constants.BASE_API + '/project/search/folder'
    return this.http.post(url, payload)
  }

  searchMember (payload): Observable<any> {
    const url = constants.BASE_API + '/project/search/member'
    return this.http.post(url, payload)
  }

}
