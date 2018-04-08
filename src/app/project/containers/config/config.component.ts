import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { ProjectService } from 'app/project/services/project.service'
import * as projectsAction from 'app/core/actions/projects.action'
import * as fromCore from 'app/core/reducers'
import * as fromProject from 'app/project/reducers'
import * as json from 'app/project/utils/json.util'

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
})
export class ConfigComponent implements OnInit {

  public projects: any[]
  public project: any

  constructor (
    private store: Store<any>,
    private projectService: ProjectService,
    private router: Router
  ) {
    this.store.select(fromCore.getProjectsItems)
      .subscribe(projects => {
        this.projects = projects
      })
    this.store.select(fromProject.getProject)
      .subscribe(project => {
        this.project = project
      })
  }

  ngOnInit () {
  }

  onEnvironment (entities) {
    this.project.environments = entities
  }

  onUpdate () {
    const payload = {
      ...this.project,
      environments: json.toJSON(this.project.environments)
    }
    this.projectService.update(this.project.id, payload)
      .subscribe(res => {
        if (!res.error) {
          this.projects = this.projects.map(project => {
            if (project.id === res.data.id) {
              project.name = res.data.name
              project.status = res.data.status
            }
            return project
          })
          this.store.dispatch(new projectsAction.ItemsAction(this.projects))
        }
      })
  }

  onDelete () {
    this.projectService.delete(this.project.id)
      .subscribe(res => {
        if (!res.error) {
          this.projects = this.projects.filter(project => {
            return project.id !== this.project.id
          })
          this.store.dispatch(new projectsAction.ItemsAction(this.projects))
          if (this.projects.length > 0) {
            this.router.navigateByUrl(`/project/${this.projects[0].id}`)
          } else {
            this.router.navigateByUrl(`/my-account`)
          }
        }
      })
  }

}
