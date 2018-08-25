import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs/Rx'
import * as json from 'app/project/utils/json.util'
import * as scraperAction from 'app/project/actions/scraper.action'
import * as fromProject from 'app/project/reducers'

@Component({
  selector: 'scraper-request',
  templateUrl: './scraper-request.component.html',
  styleUrls: ['./scraper-request.component.scss']
})
export class ScraperRequestComponent implements OnInit, OnDestroy {

  @Input('endpoint') endpoint: any
  @Input('request') request: any

  public endpoints: any[]

  public getScraperItemsSub: Subscription

  constructor(
    private store: Store<any>
  ) {
    this.getScraperItemsSub = this.store.select(fromProject.getScraperItems)
      .subscribe(endpoints => {
        this.endpoints = endpoints
      })
  }

  ngOnInit() {
    this.request.request.params = json.toArray(this.request.request.params)
    this.request.request.headers = json.toArray(this.request.request.headers)
    this.request.request.queryString = json.toArray(this.request.request.queryString)
  }

  saveHeaders (data) {
    this.request.request.headers = data
    this.dispatch()
  }

  saveBody (data) {
    this.request.request.body = data
    this.dispatch()
  }

  saveQueryString (data) {
    this.request.request.queryString = data
    this.dispatch()
  }

  saveParam (data) {
    this.request.request.params = data
  }

  dispatch () {
    this.endpoints = this.endpoints.map(endpoint => {
      if (endpoint.id === this.endpoint.id) {
        endpoint.requests = endpoint.requests.map(request => {
          if (request.id === this.request.id) {
            request = this.request
          }
          return request
        })
      }
      return endpoint
    })
    this.store.dispatch(new scraperAction.ItemsAction(this.endpoints))
  }

  ngOnDestroy () {
    if (this.getScraperItemsSub) {
      this.getScraperItemsSub.unsubscribe()
    }
  }

}
