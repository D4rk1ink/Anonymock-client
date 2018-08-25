import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs/Rx'
import { NotificationService } from 'app/shared/services/notification.service'
import { ProjectService } from 'app/project/services/project.service'
import { ConfirmService } from 'app/shared/services/confirm.service'
import * as projectsAction from 'app/core/actions/projects.action'
import * as fromCore from 'app/core/reducers'
import * as fromProject from 'app/project/reducers'
import * as json from 'app/project/utils/json.util'

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
})
export class ConfigComponent implements OnInit, OnDestroy{

  public projects: any[]
  public project: any

  public getProjectsItemsSub: Subscription
  public getProjectSub: Subscription

  constructor (
    private store: Store<any>,
    private notificationService: NotificationService,
    private projectService: ProjectService,
    private confirmService: ConfirmService,
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

  update () {
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
          this.notificationService.notify({
            type: 'success',
            message: 'Update config successfully.'
          })
        }
      })
  }

  delete () {
    this.confirmService.open({
      message: 'Are you sure you want to delete this project'
    })
      .afterClose(val => {
        if (val) {
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
                this.notificationService.notify({
                  type: 'success',
                  message: 'Delete project successfully.'
                })
              }
            })
        }
      })
  }

  ngOnDestroy () {
    if (this.getProjectsItemsSub) {
      this.getProjectsItemsSub.unsubscribe()
    }
    if (this.getProjectSub) {
      this.getProjectSub.unsubscribe()
    }
  }

}
