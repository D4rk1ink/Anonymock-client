import { Component, OnInit, OnDestroy, Input } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Rx'
import * as scraperAction from 'app/project/actions/scraper.action'
import * as fromProject from 'app/project/reducers'

@Component({
  selector: 'scraper-endpoint-detail',
  templateUrl: './scraper-endpoint-detail.component.html',
  styleUrls: ['./scraper-endpoint-detail.component.scss']
})
export class ScraperEndpointDetailComponent implements OnInit, OnDestroy {

  @Input('endpoint') endpoint: any
  @Input('isTarget') isTarget: string

  public endpoints: any[]

  public methods$: Observable<any>
  public folders$: Observable<any>

  public getScraperItemsSub: Subscription

  constructor(
    private store: Store<any>
  ) {
    this.methods$ = this.store.select(fromProject.getMethods)
    this.folders$ = this.store.select(fromProject.getFolders)
    this.getScraperItemsSub = this.store.select(fromProject.getScraperItems)
      .subscribe(endpoints => {
        this.endpoints = endpoints
      })
  }

  ngOnInit() {
  }

  onNameChange (name) {
    this.dispatch()
  }

  onPathChange (path) {
    this.dispatch()
  }
   
  onMethodChange (methodId) {
    this.dispatch()
  }
   
  onFolderChange (folderId) {
    this.dispatch()
  }

  dispatch () {
    this.endpoints = this.endpoints.map(endpoint => {
      if (this.endpoint.id === endpoint.id) {
        endpoint = this.endpoint
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
