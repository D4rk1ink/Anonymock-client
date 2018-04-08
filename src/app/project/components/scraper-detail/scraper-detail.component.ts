import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { Store } from '@ngrx/store'
import * as scraperAction from 'app/project/actions/scraper.action'
import * as fromProject from 'app/project/reducers'

@Component({
  selector: 'scraper-detail',
  templateUrl: './scraper-detail.component.html',
  styleUrls: ['./scraper-detail.component.scss']
})
export class ScraperDetailComponent implements OnInit {

  @Output('save') save: EventEmitter<any>
  @Output('scrap') scrap: EventEmitter<any>

  public baseAPI: string

  constructor(
    private store: Store<any>
  ) {
    this.save = new EventEmitter<any>()
    this.scrap = new EventEmitter<any>()
    this.store.select(fromProject.getScraperBaseAPI)
      .subscribe(baseAPI => {
        this.baseAPI = baseAPI
      })
  }

  ngOnInit () {
  }

  onBaseAPIChange (baseAPI) {
    this.store.dispatch(new scraperAction.BaseAPIAction(baseAPI))
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

}
