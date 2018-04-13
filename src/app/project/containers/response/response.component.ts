import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import { ResponseService } from 'app/project/services/response.service'
import { EndpointService } from 'app/project/services/endpoint.service'
import * as json from 'app/project/utils/json.util'
import * as responseAction from 'app/project/actions/response.action'
import * as fromProject from 'app/project/reducers'

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent implements OnInit, OnDestroy {

  public endpoint: any
  public path: string
  public response: any

  constructor(
    private store: Store<any>,
    private responseService: ResponseService,
    private endpointService: EndpointService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.store.select(fromProject.getResponse)
      .subscribe(response => {
        this.response = response
      })
    this.store.select(fromProject.getEndpoint)
      .subscribe(endpoint => {
        this.endpoint = endpoint
      })
    // Call service get response
    this.route.params.subscribe(params => {
      const responseId = params['response-id']
      this.responseService.getById(responseId)
        .subscribe(res => {
          if (!res.error) {
            res.data.condition.params = json.toArray(res.data.condition.params)
            res.data.condition.headers = json.toArray(res.data.condition.headers)
            res.data.condition.queryString = json.toArray(res.data.condition.queryString)
            res.data.response.headers = json.toArray(res.data.response.headers)
            this.store.dispatch(new responseAction.AllAction(res.data))
          }
        })
    })
  }

  ngOnInit() {
  }

  saveParams (params) {
    this.response.condition.params = params
    this.store.dispatch(new responseAction.ConditionAction(this.response.condition))
  }

  save () {
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
        params: json.toJSON(this.response.condition.params),
        body: this.response.condition.body,
        headers: json.toJSON(this.response.condition.headers),
        queryString: json.toJSON(this.response.condition.queryString)
      },
      response: {
        ...this.response.response,
        body: this.response.response.body,
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

  delete () {
    this.responseService.delete(this.response.id)
      .subscribe(res => {
        if (!res.error) {
          this.router.navigate(['..'], { relativeTo: this.route })
        }
      })
  }

  ngOnDestroy () {
    this.store.dispatch(new responseAction.ClearAction())
  }
}
