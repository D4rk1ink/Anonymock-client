import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import { FolderService } from 'app/project/services/folder.service'
import { EndpointService } from 'app/project/services/endpoint.service'
import * as endpointsAction from 'app/project/actions/endpoints.action'
import * as fromProject from 'app/project/reducers'

import { projects } from 'app/mock/projects'

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit, OnDestroy {

  public folderId: string
  public name: string
  public searchEndpoints: string
  public page: number

  public searchSub: Subscription
  public routeSub: Subscription
  public getFolderSub: Subscription
  public endpointsSub: Subscription

  constructor (
    private store: Store<any>,
    private folderService: FolderService,
    private endpointService: EndpointService,
    private route: ActivatedRoute
  ) {
    this.routeSub = this.route.params.subscribe(params => {
      this.folderId = params['folder-id'] 
    })
    this.getFolderSub = this.folderService.getById(this.folderId)
      .subscribe(res => {
        if (!res.error) {
          this.name = res.data.name
        }
      })
    this.endpointsSub = this.store.select(fromProject.getEndpoints)
      .subscribe(endpoints => {
        const nqSearchEndpoints = this.searchEndpoints !== endpoints.search
        const nqPage = this.page !== endpoints.page
        if (nqSearchEndpoints || nqPage) {
          this.searchEndpoints = endpoints.search
          this.page = endpoints.page
          this.search()
        }
      })
  }

  ngOnInit () {
  }

  search () {
    if (this.searchSub) {
      this.searchSub.unsubscribe()
    }
    const payload = {
      folder: this.folderId,
      search: this.searchEndpoints,
      page: this.page
    }
    this.store.dispatch(new endpointsAction.IsLoadingAction(true))
    this.searchSub = this.endpointService.search(payload)
      .subscribe(res => {
        if (!res.error) {
          this.store.dispatch(new endpointsAction.ItemsAction(res.data.endpoints))
          this.store.dispatch(new endpointsAction.LimitPageAction(res.data.limitPage))
          this.store.dispatch(new endpointsAction.IsLoadingAction(false))
        }
      })
  }

  ngOnDestroy () {
    if (this.getFolderSub) {
      this.getFolderSub.unsubscribe()
    }
    if (this.endpointsSub) {
      this.endpointsSub.unsubscribe()
    }
    if (this.routeSub) {
      this.routeSub.unsubscribe()
    }
    if (this.searchSub) {
      this.searchSub.unsubscribe()
    }
    this.store.dispatch(new endpointsAction.ClearAction())
  }

}
