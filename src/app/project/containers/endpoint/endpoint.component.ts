import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import * as endpointAction from '../../actions/endpoint.action'
import * as fromProject from '../../reducers'

import { projects } from 'app/mock/projects'

@Component({
  selector: 'app-endpoint',
  templateUrl: './endpoint.component.html',
  styleUrls: ['./endpoint.component.scss']
})
export class EndpointComponent implements OnInit {

  public endpoint: any
  public folders: any[]

  constructor (
    private store: Store<any>,
    private route: ActivatedRoute
  ) {
    this.store.select(fromProject.getProjectId)
      .subscribe(id => {
        const project = projects.find(project => project.id === id)
        this.folders = project.folders
        this.route.params.subscribe(param => {
          this.endpoint = project.endpoints.find(endpoint => endpoint.id === param['endpoint-id'])
          this.store.dispatch(new endpointAction.IdAction(this.endpoint.id))
          this.store.dispatch(new endpointAction.NameAction(this.endpoint.name))
          this.store.dispatch(new endpointAction.PathAction(this.endpoint.path))
          this.store.dispatch(new endpointAction.ResponsesAction(this.endpoint.responses))
        })
      })
    // Call service get endpoint
  }

  ngOnInit () {
  }

  onPathChange (path) {
    this.store.dispatch(new endpointAction.PathAction(path))
  }
}
