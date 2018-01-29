import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import * as projectAction from 'app/project/actions/project.action'
import * as fromProject from 'app/project/reducers'

import { projects } from 'app/mock/projects'

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {

  public data: any
  public row: number
  public size: any
  constructor (
    private store: Store<any>
  ) {
    this.row = 0
    this.size = 0

    this.store.select(fromProject.getProjectId)
      .subscribe(id => {
        const project = projects.find(project => project.id === id)
        this.data = project.database
        if (Array.isArray(this.data)) {
          this.row = this.data.length
          this.size = 0.5
        }
      })
  }

  ngOnInit () {
    
  }

}
