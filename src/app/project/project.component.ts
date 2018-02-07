import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import { ProjectService } from 'app/project/services/project.service';
import * as projectAction from 'app/project/actions/project.action'
import * as fromProject from 'app/project/reducers'
// import { projects } from 'app/mock/projects'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor (
    private store: Store<any>,
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {
    this.route.params.subscribe(param => {
      const vid = param['project-id']
      this.projectService.get(vid)
        .subscribe(res => {
          if (!res.error) {
            const project = {
              vid: res.data.vid,
              name: res.data.name,
              status: res.data.status,
              description: res.data.description,
              repository: res.data.repository,
              environment: res.data.environment
            }
            this.store.dispatch(new projectAction.ProjectAction(project))
          }
        })
    })
  }

  ngOnInit () {
    
  }
}
