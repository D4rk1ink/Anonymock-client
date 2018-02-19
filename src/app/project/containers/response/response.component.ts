import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import { ResponseService } from 'app/project/services/response.service';
import { EndpointService } from 'app/project/services/endpoint.service';
import * as json from 'app/project/utils/json.util'
import * as responseAction from 'app/project/actions/response.action'
import * as fromProject from 'app/project/reducers'

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent implements OnInit {

  public endpoint: any
  public path: string
  public response: any
  public params: any

  constructor(
    private store: Store<any>,
    private responseService: ResponseService,
    private endpointService: EndpointService,
    private route: ActivatedRoute
  ) {
    this.params = {}
    this.store.select(fromProject.getResponse)
      .subscribe(response => {
        this.response = response
        this.paramsFilter(this.path || '')
      })
    this.store.select(fromProject.getEndpoint)
      .subscribe(endpoint => {
        this.endpoint = endpoint
      })
    this.store.select(fromProject.getEndpointPath)
      .subscribe(path => {
        this.path = path
        this.paramsFilter(this.path || '')
      })
    // Call service get response
    this.route.params.subscribe(params => {
      const responseId = params['response-id']
      this.responseService.getById(responseId)
        .subscribe(res => {
          if (!res.error) {
            res.data.condition.headers = json.toArray(res.data.condition.headers)
            res.data.condition.queryString = json.toArray(res.data.condition.queryString)
            res.data.response.headers = json.toArray(res.data.response.headers)
            this.store.dispatch(new responseAction.IdAction(res.data.id))
            this.store.dispatch(new responseAction.NameAction(res.data.name))
            this.store.dispatch(new responseAction.ConditionAction(res.data.condition))
            this.store.dispatch(new responseAction.ResponseAction(res.data.response))
          }
        })
    })
  }

  ngOnInit() {
  }

  saveParam (params) {
    this.response.condition.params = params
    this.store.dispatch(new responseAction.ConditionAction(this.response.condition))
  }

  paramsFilter (path) {
    const paramPattern = /\{([A-Za-z0-9\-]+)\}/g
    const match = path.match(paramPattern) || []
    const keys = match
      .map(key => new RegExp(paramPattern).exec(key).slice(1).pop())
      .filter((param, i, arr) => param !== '' && !new RegExp(/\.{2,}|\.$/g).test(param) && arr.indexOf(param) === i)
    const temp = { ...this.response.condition.params }
    this.response.condition.params = {}
    for (const key of keys) {
      this.response.condition.params[key] = temp[key] || undefined
    }
  }

  onSubmit () {
    // update endpoint
    const endpointPayload = {
      name: this.endpoint.name,
      path: this.endpoint.path,
      method: this.endpoint.method.id,
      folder: this.endpoint.folder.id,
    }
    const responsePayload = {
      name: this.response.name,
      condition: {
        ...this.response.condition,
        headers: json.toJSON(this.response.condition.headers),
        queryString: json.toJSON(this.response.condition.queryString)
      },
      response: {
        ...this.response.response,
        headers: json.toJSON(this.response.response.headers)
      }
    }
    this.endpointService.update(this.endpoint.id, endpointPayload)
      .subscribe(res => {
        if (!res.error) {
          // update response  
          this.responseService.update(this.response.id, responsePayload)
            .subscribe(res => {
              if (!res.error) {
                console.log(res.data)
              }
            })
        }
      })
  }
}
