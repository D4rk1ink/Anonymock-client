import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import * as projectAction from 'app/project/actions/project.action'
import * as fromProject from 'app/project/reducers'

import { projects } from 'app/mock/projects'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor (
    private store: Store<any>,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(param => {
      const project = projects.find(project => project.id === param['project-id'])

      this.store.dispatch(new projectAction.IdAction(project.id))
      this.store.dispatch(new projectAction.NameAction(project.name))
    })
  }

  ngOnInit () {
    
  }
}
