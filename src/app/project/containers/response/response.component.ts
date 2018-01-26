import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import * as endpointAction from '../../actions/endpoint.action'
import * as responseAction from '../../actions/response.action'
import * as fromProject from '../../reducers'

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent implements OnInit {

  public response: any
  public params: any
  public envs: string[]

  constructor(
    private store: Store<any>
  ) {
    // Call service get response
    this.response = {
      name: 'When user id is 001',
      params: {
        userId: '001'
      },
      header: {
        'x-language': 'th',
        'cookie': 'asdasOPAHGp09SHDVioHAODUCh'
      },
      body: {},
      queryString: {}
    }
    this.store.dispatch(new responseAction.NameAction(this.response.name))
  }

  ngOnInit() {
    this.store.select(fromProject.getEndpointPath)
      .subscribe(path => {
        this.paramsFilter(path || '')
        // this.envsFilter(path || '')
      })
  }

  paramsFilter (path) {
    const paramPattern = /\{([A-Za-z0-9\-]+)\}/g
    const match = path.match(paramPattern) || []
    const keys = match
      .map(key => new RegExp(paramPattern).exec(key).slice(1).pop())
      .filter((param, i, arr) => param !== '' && !new RegExp(/\.{2,}|\.$/g).test(param) && arr.indexOf(param) === i)
    this.params = {}
    for (const key of keys) {
      this.params[key] = undefined
    }
  }

  // envsFilter (path) {
  //   const envsPattern = /\{\$env\.([A-Za-z0-9|\.]+)\}/g
  //   const match = path.match(envsPattern) || []
  //   this.envs = match
  //     .map(param => new RegExp(envsPattern).exec(param).slice(1).pop())
  //     .filter((param, i, arr) => param !== '' && !new RegExp(/\.{2,}|\.$/g).test(param) && arr.indexOf(param) === i)
  // }

}
