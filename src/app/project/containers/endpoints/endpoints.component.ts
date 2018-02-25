import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { Store } from '@ngrx/store'
import { EndpointService } from 'app/project/services/endpoint.service'
import * as endpointsAction from 'app/project/actions/endpoints.action'
import * as fromProject from 'app/project/reducers'

import { projects } from 'app/mock/projects'

@Component({
  selector: 'app-endpoints',
  templateUrl: './endpoints.component.html',
  styleUrls: ['./endpoints.component.scss']
})
export class EndpointsComponent implements OnInit, OnDestroy {

  public projectId: string
  public endpoints: any[]
  public searchEndpoints: string
  public page: number

  public searchSub: Subscription

  constructor (
    private store: Store<any>,
    private endpointService: EndpointService
  ) {
    this.store.select(fromProject.getProjectId)
      .subscribe(id => {
        this.projectId = id
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
      project: this.projectId,
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

  ngOnDestroy () {
    this.store.dispatch(new endpointsAction.ClearAction())
  }

}
