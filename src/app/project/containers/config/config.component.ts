import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import * as projectAction from 'app/project/actions/project.action'
import * as fromProject from 'app/project/reducers'

import { projects } from 'app/mock/projects'

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  public project: any

  constructor (
    private store: Store<any>
  ) {
    this.store.select(fromProject.getProject)
      .subscribe(project => {
        this.project = {
          id: project.id,
          name: project.name,
        }
      })
  }

  ngOnInit () {
  }

}
