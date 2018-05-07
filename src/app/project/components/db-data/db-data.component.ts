import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { Store } from '@ngrx/store'
import * as json from 'app/project/utils/json.util'
import * as databaseAction from 'app/project/actions/database.action'
import * as fromProject from 'app/project/reducers'

@Component({
  selector: 'db-data',
  templateUrl: './db-data.component.html',
  styleUrls: ['./db-data.component.scss']
})
export class DbDataComponent implements OnInit {

  @ViewChild('download') download: ElementRef

  public data: any
  public row: number
  public size: number

  constructor(
    private store: Store<any>
  ) {
    this.row = 0
    this.size = 0
    this.store.select(fromProject.getDatabaseData)
      .subscribe(data => {
        this.data = data
        this.setRow(this.data)
      })
  }

  ngOnInit() {
  }

  onExport () {
    const blob = new Blob([JSON.stringify(this.data)], {type : 'application/json'})
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

}
