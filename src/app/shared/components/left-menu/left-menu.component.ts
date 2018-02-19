import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'
import { Store } from '@ngrx/store';
import { ProjectService } from 'app/project/services/project.service'
import { UserService } from 'app/my-account/services/user.service'
import * as userAction from 'app/core/actions/user.action';
import * as projectsAction from 'app/core/actions/projects.action';
import * as fromCore from 'app/core/reducers';
import * as database from 'app/core/services/database.service';

@Component({
  selector: 'left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  public user: any
  public isNewProject: boolean
  public menuTarget: string
  public expandProject: string
  public projects: any[]

  constructor (
    private store: Store<any>,
    private router: Router,
    private userService: UserService,
    private projectService: ProjectService
  ) {
    const user = database.getUser()
    this.store.select(fromCore.getProjectsItems)
      .subscribe(projects => {
        this.projects = projects
      })
    this.store.select(fromCore.getUser)
      .subscribe(user => {
        this.user = user
      })
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.setMenuTarget(val.url)
      }
    })
    this.userService.getById(user.id)
      .subscribe(res => {
        if (!res.error) {
          const user = {
            id: res.data.id,
            firstname: res.data.firstname,
            lastname: res.data.lastname,
            email: res.data.email,
            picture: res.data.picture,
            isAdmin: res.data.isAdmin
          }
          database.saveUser(user)
          this.store.dispatch(new userAction.UserAction(user))
        }
      })
    this.projectService.get()
      .subscribe(res => {
        if (!res.error) {
          this.store.dispatch(new projectsAction.ItemsAction(res.data))
        }
      })
  }

  ngOnInit () {
  }

  setMenuTarget (url) {
    const targets = new RegExp('/?([^\S][^/]+)').exec(url)
    if (targets) {
      this.menuTarget = targets[1]
      if (this.menuTarget === 'project') {
        this.menuTarget = new RegExp('/project/([^\S][^/]+)').exec(url)[1]
      }
    }
  }

  onExpandProject (id) {
    this.menuTarget = id
    // this.router.navigateByUrl(`/project/${id}/folder`)
  }

  onNewProject () {
    this.isNewProject = !this.isNewProject
  }

  onBlurNewProject () {
    this.isNewProject = false
  }

  onSubmitNewProject (values) {
    const payload = {
      name: values.name
    }
    this.projectService.create(payload)
      .subscribe(res => {
        if (!res.error) {
          const project = res.data
          this.projects.push(project)
          this.onBlurNewProject()
        }
      })
  }

}
