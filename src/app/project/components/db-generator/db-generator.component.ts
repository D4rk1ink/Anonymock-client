import { Component, OnInit, Input } from '@angular/core'
import { Store } from '@ngrx/store'
import { DatabaseService } from 'app/project/services/database.service'
import { NotificationService } from 'app/shared/services/notification.service'
import * as databaseAction from 'app/project/actions/database.action'
import * as fromProject from 'app/project/reducers'

@Component({
  selector: 'db-generator',
  templateUrl: './db-generator.component.html',
  styleUrls: ['./db-generator.component.scss']
})
export class DbGeneratorComponent implements OnInit {

  public projectId: string
  public menuSelector: string
  public menu: any[] = [
    { id: 'M01', title: 'Generate' },
    { id: 'M02', title: 'Custom' }
  ]

  constructor (
    private store: Store<any>,
    private notificationService: NotificationService,
    private databaseService: DatabaseService
  ) {
    this.menuSelector = this.menu[0].id
    this.store.select(fromProject.getProjectId)
      .subscribe(id => {
        this.projectId = id
      })
  }

  ngOnInit () {

  }

  onSelectMenu (id) {
    this.menuSelector = id
  }

  onGenerate (payload) {
    payload.project = this.projectId
    this.databaseService.generate(payload)
      .subscribe(res => {
        if (!res.error) {
          const database = res.data
          this.store.dispatch(new databaseAction.DataAction(JSON.stringify(database.data)))
          this.notificationService.notify({
            type: 'success',
            message: 'Generate database successfully'
          })
        } else {
          this.notificationService.notify({
            type: 'error',
            message: 'The generator has errors'
          })
        }
      })
  }

  onImport (payload) {
    payload.project = this.projectId
    this.databaseService.import(payload)
      .subscribe(res => {
        if (!res.error) {
          const database = res.data
          this.store.dispatch(new databaseAction.DataAction(JSON.stringify(database.data)))
          this.notificationService.notify({
            type: 'success',
            message: 'Import database successfully'
          })
        } else {
          this.notificationService.notify({
            type: 'error',
            message: 'Importing has errors'
          })
        }
      })
  }

}
