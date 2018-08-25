import { Component, OnInit, OnDestroy } from '@angular/core'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs/Rx'
import { DatabaseService } from 'app/project/services/database.service'
import * as json from 'app/project/utils/json.util'
import * as databaseAction from 'app/project/actions/database.action'
import * as fromProject from 'app/project/reducers'

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit, OnDestroy {

  public projectId: string

  public getProjectIdSub: Subscription

  constructor (
    private store: Store<any>,
    private databaseService: DatabaseService
  ) {
    this.getProjectIdSub = this.store.select(fromProject.getProjectId)
      .subscribe(id => {
        if (!id) return
        this.projectId = id
        this.databaseService.get({ project: id })
          .subscribe(res => {
            if (!res.error) {
              const data = JSON.stringify(res.data.data)
              const schema = JSON.stringify(res.data.schema)
              const generate = JSON.stringify(res.data.generate)
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

  ngOnDestroy () {
    if (this.getProjectIdSub) {
      this.getProjectIdSub.unsubscribe()
    }
  }
}
