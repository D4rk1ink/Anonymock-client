import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import * as endpointAction from '../../actions/endpoint.action'
import * as responseAction from '../../actions/response.action'
import * as fromProject from '../../reducers'

import { projects } from 'app/mock/projects'

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
    private store: Store<any>,
    private route: ActivatedRoute
  ) {
    // Call service get response
    this.store.select(fromProject.getProjectId)
      .subscribe(id => {
        const project = projects.find(project => project.id === id)
        this.store.select(fromProject.getEndpointId)
          .subscribe(endpointId => {
            this.route.params.subscribe(param => {
              const endpoint = project.endpoints.find(endpoint => endpoint.id === endpointId)
              const response = endpoint.responses.find(response => response.id === param['response-id'])
              this.response = {
                name: response.name,
                params: {
                  'user-id': '001'
                },
                header: {
                  'x-language': 'th',
                  'cookie': 'asdasOPAHGp09SHDVioHAODUCh'
                },
                body: {},
                queryString: {}
              }
              this.store.dispatch(new responseAction.NameAction(this.response.name))
            })
          })
      })
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
