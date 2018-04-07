import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Store } from '@ngrx/store'
import * as json from 'app/project/utils/json.util'
import * as scraperAction from 'app/project/actions/scraper.action'
import * as fromProject from 'app/project/reducers'

@Component({
  selector: 'scraper-request',
  templateUrl: './scraper-request.component.html',
  styleUrls: ['./scraper-request.component.scss']
})
export class ScraperRequestComponent implements OnInit {

  @Input('endpoint') endpoint: any
  @Input('request') request: any

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.request.request.params = json.toArray(this.request.request.params)
    this.request.request.headers = json.toArray(this.request.request.headers)
    this.request.request.queryString = json.toArray(this.request.request.queryString)
  }

  saveHeader (data) {
    this.request.headers = data
    this.dispatch()
  }

  saveBody (data) {
    this.request.body = data
    this.dispatch()
  }

  saveQueryString (data) {
    this.request.queryString = data
    this.dispatch()
  }

  saveParam (data) {

  }

  async dispatch () {
    const endpoints = (await this.store.select(fromProject.getScraperItems).toPromise())
      .map(endpoint => {
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
    this.store.dispatch(new scraperAction.ItemsAction(endpoints))
  }

}
