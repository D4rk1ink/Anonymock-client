import { Component, OnInit, Input } from '@angular/core'
import { Store } from '@ngrx/store'
import { ScraperService } from 'app/project/services/scraper.service'
import * as scraperAction from 'app/project/actions/scraper.action'
import * as fromProject from 'app/project/reducers'
import * as json from 'app/project/utils/json.util'

@Component({
  selector: 'app-scraper-endpoint',
  templateUrl: './scraper-endpoint.component.html',
  styleUrls: ['./scraper-endpoint.component.scss']
})
export class ScraperEndpointComponent implements OnInit {

  @Input('endpoint') endpoint: any
  @Input('isTarget') isTarget: boolean

  public endpoints: any[]

  public requestTarget: any

  constructor(
    private store: Store<any>,
    private scraperService: ScraperService
  ) {
    this.store.select(fromProject.getScraperItems)
      .subscribe(endpoints => {
        this.endpoints = endpoints
      })
  }

  ngOnInit() {
  }

  goToRequest (request) {
    this.requestTarget = request
  }

  backToRequests () {
    this.requestTarget = null
  }

  createRequest (endpointId) {
    this.scraperService.createRequest({ endpoint: endpointId, environment: 'dev' })
      .subscribe(res => {
          if (!res.error) {
            this.endpoints = this.endpoints.map(endpoint => {
              if (endpoint.id === res.data.endpoint) {
                res.data.isNew = true
                endpoint.requests = [res.data, ...endpoint.requests]
              }
              return endpoint
            })
            this.store.dispatch(new scraperAction.ItemsAction(this.endpoints))
          }
      })
  }

  setDefault (requestId) {
    this.scraperService.setDefault(requestId)
      .subscribe(res => {
        if (!res.error) {
          this.endpoints = this.endpoints.map(endpoint => {
            if (res.data.endpoint === endpoint.id) {
              endpoint.requests = endpoint.requests.map(request => {
                request.isDefault = (res.data.id === request.id) ? res.data.isDefault : false
                return request
              })
            }
            return endpoint
          })
          this.store.dispatch(new scraperAction.ItemsAction(this.endpoints))
        }
      })
  }

  save () {
    const endpoint = json.clone(this.endpoints).find(endpoint => this.endpoint.id === endpoint.id)
    endpoint.requests = endpoint.requests.map(request => {
      request.request.params = json.toJSON(request.request.params)
      request.request.headers = json.toJSON(request.request.headers)
      request.request.queryString = json.toJSON(request.request.queryString)
      return request
    })
    const endpointPayload = {
      ...endpoint,
      method: endpoint.method.id,
      folder: endpoint.folder.id
    }
    this.scraperService.updateEndpoint(endpoint.id, endpointPayload)
      .subscribe(res => {
        if (!res.error) {
          alert('Save ' + res.data.name)
        }
      })
  }

  delete () {
    if (this.requestTarget) {
      this.deleteRequest(this.requestTarget.id)
    } else {
      this.deleteEndpoint(this.endpoint.id)
    }
  }

  deleteEndpoint (id) {

  }

  deleteRequest (id) {
    
  }

}
