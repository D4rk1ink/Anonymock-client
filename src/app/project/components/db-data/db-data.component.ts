import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs/Rx'
import * as json from 'app/project/utils/json.util'
import * as databaseAction from 'app/project/actions/database.action'
import * as fromProject from 'app/project/reducers'

@Component({
  selector: 'db-data',
  templateUrl: './db-data.component.html',
  styleUrls: ['./db-data.component.scss']
})
export class DbDataComponent implements OnInit, OnDestroy {

  @ViewChild('download') download: ElementRef

  public data: any
  public row: number
  public size: number

  public getDatabaseDataSub: Subscription

  constructor(
    private store: Store<any>
  ) {
    this.row = 0
    this.size = 0
    this.getDatabaseDataSub = this.store.select(fromProject.getDatabaseData)
      .subscribe(data => {
        this.data = data
        this.setRow(this.data)
      })
  }

  ngOnInit() {
  }

  onExport () {
    const blob = new Blob([this.data], {type : 'application/json'})
    const url = URL.createObjectURL(blob)
    this.download.nativeElement.setAttribute('href', url)
    this.download.nativeElement.setAttribute('download', 'database.json')
    this.download.nativeElement.click()
  }

  setRow (data) {
    try {
      data = JSON.parse(data)
      if (Array.isArray(data)) {
        return this.row = data.length
      }
    } catch (err) { }
    return this.row = 0
  }

  ngOnDestroy () {
    if (this.getDatabaseDataSub) {
      this.getDatabaseDataSub.unsubscribe()
    }
  }

}
