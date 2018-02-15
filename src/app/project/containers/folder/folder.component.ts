import { Component, OnInit } from '@angular/core';
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
export class FolderComponent implements OnInit {

  public folderId: string
  public name: string
  public searchEndpoints: string
  public page: number

  public searchSub: Subscription

  constructor (
    private store: Store<any>,
    private folderService: FolderService,
    private endpointService: EndpointService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(param => {
      this.folderId = param['folder-id']
      this.folderService.getById(this.folderId)
        .subscribe(res => {
          if (!res.error) {
            this.name = res.data.name
          }
        })
    })
    this.store.select(fromProject.getEndpoints)
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

  onSearch (text) {
    this.store.dispatch(new endpointsAction.SearchAction(text))
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
    this.searchSub = this.endpointService.search(payload)
      .subscribe(res => {
        if (!res.error) {
          this.store.dispatch(new endpointsAction.ItemsAction(res.data.endpoints))
          this.store.dispatch(new endpointsAction.LimitPageAction(res.data.limitPage))
        }
      })
  }

}
