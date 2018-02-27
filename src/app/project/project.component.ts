import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import { ProjectService } from 'app/project/services/project.service';
import * as coreDatabase from 'app/core/services/database.service'
import * as projectAction from 'app/project/actions/project.action'
import * as fromProject from 'app/project/reducers'
import * as json from 'app/project/utils/json.util';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  public isLoading: boolean

  constructor (
    private store: Store<any>,
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {
    this.route.params.subscribe(param => {
      const projectId = param['project-id']
      this.store.dispatch(new projectAction.IdAction(projectId))
      coreDatabase.saveProject(projectId)
      this.isLoading = true
      this.projectService.get(projectId)
        .subscribe(res => {
          if (!res.error) {
            const project = {
              id: res.data.id,
              name: res.data.name,
              status: res.data.status,
              description: res.data.description,
              repository: res.data.repository,
              environments: json.toArray(res.data.environments),
              isManager: res.data.isManager,
            }
            this.store.dispatch(new projectAction.ProjectAction(project))
            this.isLoading = false
          }
        })
    })
  }

  ngOnInit () {
    
  }

  getRouterOutletState (outlet) {
    return outlet.activatedRouteData.state
  }
}
