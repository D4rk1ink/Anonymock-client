import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import * as projectAction from 'app/project/actions/project.action'
import * as fromProject from 'app/project/reducers'

import { projects } from 'app/mock/projects'

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {

  public folder: any

  constructor (
    private store: Store<any>,
    private route: ActivatedRoute
  ) {
    
    this.store.select(fromProject.getProjectId)
      .subscribe(id => {
        const project = projects.find(project => project.id === id)
        this.route.params.subscribe(param => {
          const folder = project.folders.find(folder => folder.id === param['folder-id'])
          const endpointIds = folder.endpoints

          this.folder = {
            id: folder.id,
            name: folder.name,
            endpoints: []
          }

          for (const endpoint of project.endpoints) {
            if (endpointIds.indexOf(endpoint.id) > -1) {
              this.folder.endpoints.push(endpoint)
            }
          }
        })
      })
    
  }

  ngOnInit () {
  }

}
