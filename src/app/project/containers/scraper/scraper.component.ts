import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { Store } from '@ngrx/store'
import { ScraperService } from 'app/project/services/scraper.service';
import * as scraperAction from 'app/project/actions/scraper.action'
import * as fromProject from 'app/project/reducers'

@Component({
  selector: 'app-scraper',
  templateUrl: './scraper.component.html',
  styleUrls: ['./scraper.component.scss']
})
export class ScraperComponent implements OnInit {

  public projectId: string

  public isLoading: boolean
  public endpoints: any[]
  public searchEndpoint: string
  public page: number
  public limitPage: number

  public endpointTarget: string
  public requestTarget: string

  public scraperSub: Subscription
  public projectIdSub: Subscription
  public searchSub: Subscription

  constructor (
    private store: Store<any>,
    private scraperService: ScraperService
  ) {
    this.scraperSub = this.store.select(fromProject.getScraper)
      .subscribe(res => {
        this.isLoading = res.isLoading
        this.searchEndpoint = res.search
        this.endpoints = res.items
        this.page = res.page
        this.limitPage = res.limitPage
      })
    this.projectIdSub = this.store.select(fromProject.getProjectId)
      .subscribe(id => {
        if (!id) return
        this.projectId = id
        this.search()
      })
  }

  ngOnInit () {
  }

  createEndpoint () {
    this.scraperService.createEndpoint({ project: this.projectId })
      .subscribe(res => {
        res.data.isNew = true
        if (this.page > 1) {
          this.page = 1
          this.setPage()
        } else {
          if (this.endpoints.length >= 10) {
            this.endpoints = this.endpoints.slice(0, this.endpoints.length - 1)
            this.store.dispatch(new scraperAction.LimitPageAction(this.limitPage + 1))
          }
          this.endpoints = [res.data, ...this.endpoints]
          this.store.dispatch(new scraperAction.ItemsAction(this.endpoints))
        }
      })
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

  onExpand (id) {
    this.endpointTarget = id
  }

  onGotoRequest (request) {
    this.requestTarget = request
  }

  onBackFromRequest () {
    this.requestTarget = null
  }

  onSearch (text) {
    this.store.dispatch(new scraperAction.SearchAction(text))
    this.search()
  }

  search () {
    if (this.searchSub) {
      this.searchSub.unsubscribe()
    }
    const payload = {
      project: this.projectId,
      search: this.searchEndpoint,
      page: this.page
    }
    this.store.dispatch(new scraperAction.IsLoadingAction(true))
    this.searchSub = this.scraperService.search(payload)
      .subscribe(res => {
        if (!res.error) {
          this.store.dispatch(new scraperAction.ItemsAction(res.data.endpoints))
          this.store.dispatch(new scraperAction.LimitPageAction(res.data.limitPage))
          this.store.dispatch(new scraperAction.IsLoadingAction(false))
        }
      })
  }

  setPage () {
    this.store.dispatch(new scraperAction.PageAction(this.page))
  }

}
