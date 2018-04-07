import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store'
import * as scraperAction from 'app/project/actions/scraper.action'
import * as fromProject from 'app/project/reducers'

@Component({
  selector: 'scraper-endpoint-item',
  templateUrl: './scraper-endpoint-item.component.html',
  styleUrls: ['./scraper-endpoint-item.component.scss']
})
export class ScraperEndpointItemComponent implements OnInit {

  @Input('endpoint') endpoint: any
  @Input('isTarget') isTarget: boolean

  public requestTarget: string

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
  }

  onNameChange (name) {
    this.dispatch()
  }

  onPathChange (path) {
    this.dispatch()
  }

  goToRequest (request) {
    this.requestTarget = request
  }

  backToRequests () {
    this.requestTarget = null
  }

  async dispatch () {
    const endpoints = (await this.store.select(fromProject.getScraperItems).toPromise())
      .map(endpoint => {
        if (this.endpoint.id === endpoint.id) {
          endpoint = this.endpoint
        }
        return endpoint
      })
    this.store.dispatch(new scraperAction.ItemsAction(endpoints))
  }

}
