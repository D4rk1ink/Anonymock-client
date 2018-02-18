import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as json from 'app/project/utils/json.util'
import * as databaseAction from 'app/project/actions/database.action'
import * as fromProject from 'app/project/reducers'

@Component({
  selector: 'db-data',
  templateUrl: './db-data.component.html',
  styleUrls: ['./db-data.component.scss']
})
export class DbDataComponent implements OnInit {

  public data: string
  public row: number
  public size: number

  constructor(
    private store: Store<any>
  ) {
    this.row = 0
    this.size = 0
    this.store.select(fromProject.getDatabaseData)
      .subscribe(data => {
        this.data = json.pretty(data)
        this.setRow(this.data)
      })
  }

  ngOnInit() {
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
