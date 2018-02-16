import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import { ResponseService } from 'app/project/services/response.service';
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
    private responseService: ResponseService,
    private route: ActivatedRoute
  ) {
    this.store.select(fromProject.getEndpointPath)
      .subscribe(path => {
        this.paramsFilter(path || '')
      })
    this.store.select(fromProject.getResponse)
      .subscribe(response => {
        this.response = response
      })
    // Call service get response
    this.route.params.subscribe(params => {
      const responseId = params['response-id']
      this.responseService.getById(responseId)
        .subscribe(res => {
          if (!res.error) {
            this.response = res.data
            this.params = this.response.condition.params
          }
        })
    })
  }

  ngOnInit() {
    
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

}
