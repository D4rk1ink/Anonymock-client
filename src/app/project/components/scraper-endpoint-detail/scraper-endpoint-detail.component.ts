import { Component, OnInit, Input } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Store } from '@ngrx/store'
import * as scraperAction from 'app/project/actions/scraper.action'
import * as fromProject from 'app/project/reducers'

@Component({
  selector: 'scraper-endpoint-detail',
  templateUrl: './scraper-endpoint-detail.component.html',
  styleUrls: ['./scraper-endpoint-detail.component.scss']
})
export class ScraperEndpointDetailComponent implements OnInit {

  @Input('endpoint') endpoint: any
  @Input('isTarget') isTarget: string

  public endpoints: any[]

  public methods$: Observable<any>
  public folders$: Observable<any>

  constructor(
    private store: Store<any>
  ) {
    this.methods$ = this.store.select(fromProject.getMethods)
    this.folders$ = this.store.select(fromProject.getFolders)
    this.store.select(fromProject.getScraperItems)
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
    
  }
   
  onFolderChange (folderId) {

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

}
