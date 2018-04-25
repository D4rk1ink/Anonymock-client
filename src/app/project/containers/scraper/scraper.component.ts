import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs/Rx'
import { Store } from '@ngrx/store'
import { NotificationService } from 'app/shared/services/notification.service'
import { MethodService } from 'app/project/services/method.service'
import { FolderService } from 'app/project/services/folder.service'
import { ScraperService } from 'app/project/services/scraper.service'
import * as foldersAction from 'app/project/actions/folders.action'
import * as methodsAction from 'app/project/actions/methods.action'
import * as scraperAction from 'app/project/actions/scraper.action'
import * as fromProject from 'app/project/reducers'
import * as json from 'app/project/utils/json.util'

@Component({
  selector: 'app-scraper',
  templateUrl: './scraper.component.html',
  styleUrls: ['./scraper.component.scss']
})
export class ScraperComponent implements OnInit {

  public isLoading: boolean
  public baseAPI: string
  public http: any
  public searchEndpoint: string
  public endpoints: any[]
  public page: number
  public limitPage: number

  public scraperSub: Subscription
  public projectIdSub: Subscription
  public searchSub: Subscription
  public getDetailSub: Subscription

  constructor (
    private store: Store<any>,
    private notificationService: NotificationService,
    private methodService: MethodService,
    private folderService: FolderService,
    private scraperService: ScraperService
  ) {
    this.getFolders()
    this.getMethods()
    this.getDetail()
    this.scraperSub = this.store.select(fromProject.getScraper)
      .subscribe(res => {
        this.isLoading = res.isLoading
        this.baseAPI = res.baseAPI
        this.http = res.http
        this.limitPage = res.limitPage
        this.endpoints = res.items
        const nqSearch = this.searchEndpoint !== res.search
        const nqPage = this.page !== res.page
        if (nqSearch || nqPage) {
          this.searchEndpoint = res.search
          this.page = res.page
          this.endpointSearch()
        }
      })
  }

  ngOnInit () {
  }

  createEndpoint () {
    this.scraperService.createEndpoint()
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

  getDetail () {
    this.getDetailSub = this.scraperService.getDetail()
      .subscribe(res => {
        if (!res.error) {
          const baseAPI = res.data.baseAPI
          const http = {
            headers: json.toArray(res.data.http.headers),
            queryString: json.toArray(res.data.http.queryString)
          }
          this.store.dispatch(new scraperAction.BaseAPIAction(baseAPI))
          this.store.dispatch(new scraperAction.HttpAction(http))
        }
      })
  }

  endpointSearch () {
    if (this.searchSub) {
      this.searchSub.unsubscribe()
    }
    const payload = {
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

  getFolders () {
    this.folderService.search({ all: true })
      .subscribe(res => {
        if (!res.error) {
          this.store.dispatch(new foldersAction.ItemsAction(res.data.folders))
          this.store.dispatch(new foldersAction.IsLoadingAction(true))
        }
      })
  }

  getMethods () {
    this.methodService.search()
      .subscribe(res => {
        if (!res.error) {
          this.store.dispatch(new methodsAction.ItemsAction(res.data))
          this.store.dispatch(new methodsAction.IsLoadingAction(true))
        }
      })
  }

  setPage () {
    this.store.dispatch(new scraperAction.PageAction(this.page))
  }

  save () {
    const payload = {
      baseAPI: this.baseAPI,
      http: {
        headers: json.toJSON(this.http.headers),
        queryString: json.toJSON(this.http.queryString)
      }
    }
    this.scraperService.updateScraper(payload)
      .subscribe(res => {
        if (!res.error) {
          this.notificationService.notify({
            type: 'success',
            message: 'Update scraper successfully'
          })
        }
      })
  }
  
  scrap () {
    this.scraperService.scrap()
      .subscribe(res => {
        this.notificationService.notify({
          type: 'success',
          message: 'successfully'
        })
      })
  }

}
