import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { DatabaseService } from 'app/project/services/database.service'
import * as json from 'app/project/utils/json.util'
import * as databaseAction from 'app/project/actions/database.action'
import * as fromProject from 'app/project/reducers'

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {
  
  public projectId: string

  constructor (
    private store: Store<any>,
    private databaseService: DatabaseService
  ) {
    this.store.select(fromProject.getProjectId)
      .subscribe(id => {
        if (!id) return
        this.projectId = id
        this.databaseService.get({ project: id })
          .subscribe(res => {
            if (!res.error) {
              const data = json.pretty(res.data.data)
              const schema = res.data.schema
              const generate = json.pretty(res.data.generate)
              const database = {
                data: data,
                schema: schema,
                generate: generate,
                custom: '[]'
              }
              this.store.dispatch(new databaseAction.DatabaseAction(database))
            }
          })
      })
  }

  ngOnInit () {
  }
}
