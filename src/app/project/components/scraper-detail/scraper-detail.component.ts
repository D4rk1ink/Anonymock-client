import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs/Rx'
import * as scraperAction from 'app/project/actions/scraper.action'
import * as fromProject from 'app/project/reducers'

@Component({
  selector: 'scraper-detail',
  templateUrl: './scraper-detail.component.html',
  styleUrls: ['./scraper-detail.component.scss']
})
export class ScraperDetailComponent implements OnInit, OnDestroy {

  @Output('save') save: EventEmitter<any>
  @Output('scrap') scrap: EventEmitter<any>

  public baseAPI: string
  public http: any

  public getScraperSub: Subscription

  constructor(
    private store: Store<any>
  ) {
    this.save = new EventEmitter<any>()
    this.scrap = new EventEmitter<any>()
    this.getScraperSub = this.store.select(fromProject.getScraper)
      .subscribe(res => {
        this.baseAPI = res.baseAPI
        this.http = res.http
      })
  }

  ngOnInit () {
  }

  onBaseAPIChange (baseAPI) {
    this.store.dispatch(new scraperAction.BaseAPIAction(baseAPI))
  }

  saveHeaders (data) {
    this.http.headers = data
    this.store.dispatch(new scraperAction.HttpAction(this.http))
  }

  saveQueryString (data) {
    this.http.queryString = data
    this.store.dispatch(new scraperAction.HttpAction(this.http))
  }

  onSearch (text) {
    this.store.dispatch(new scraperAction.SearchAction(text))
  }

  onSave () {
    this.save.emit()
  }
  
  onScrap () {
    this.scrap.emit()
  }

  ngOnDestroy () {
    if (this.getScraperSub) {
      this.getScraperSub.unsubscribe()
    }
  }

}
