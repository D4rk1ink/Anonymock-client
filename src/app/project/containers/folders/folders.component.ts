import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import * as projectAction from 'app/project/actions/project.action'
import * as fromProject from 'app/project/reducers'

import { projects } from 'app/mock/projects'

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.scss']
})
export class FoldersComponent implements OnInit {

  public folders: any[]
  public isNewFolder: boolean

  constructor (
    private store: Store<any>
  ) {
    this.store.select(fromProject.getProjectId)
      .subscribe(id => {
        const project = projects.find(project => project.id === id)
        this.folders = project.folders
      })
  }

  ngOnInit () {
  }

  onNew () {
    this.isNewFolder = true
  }

  onSubmitNewFolder () {
    this.isNewFolder = false
  }

}
