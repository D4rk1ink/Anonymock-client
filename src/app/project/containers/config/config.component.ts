import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { ProjectService } from 'app/project/services/project.service'
import * as projectAction from 'app/project/actions/project.action'
import * as fromProject from 'app/project/reducers'
import * as fromProjectReducer from 'app/project/reducers/project.reducer'

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  public project: fromProjectReducer.State

  constructor (
    private store: Store<any>,
    private projectService: ProjectService
  ) {
    this.store.select(fromProject.getProject)
      .subscribe(project => {
        this.project = {
          id: project.id,
          name: project.name,
          status: project.status,
          description: project.description,
          repository: project.repository,
          environment: {
            name: 'asd'
          }
        }
      })
  }

  ngOnInit () {
  }

  onEnvironment (entities) {
    this.project.environment = entities
  }

  onUpdate () {
    console.log(this.project)
  }

}
