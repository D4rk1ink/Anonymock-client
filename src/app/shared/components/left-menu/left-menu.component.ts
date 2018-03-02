import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'
import { Store } from '@ngrx/store';
import { ProjectService } from 'app/project/services/project.service'
import * as userAction from 'app/core/actions/user.action';
import * as projectsAction from 'app/core/actions/projects.action';
import * as fromCore from 'app/core/reducers';

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
    private projectService: ProjectService,
    private el: ElementRef
  ) {
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
  }

  onNewProject () {
    this.isNewProject = !this.isNewProject
    if (this.isNewProject) {
      const autofocus = this.el.nativeElement.querySelector('.project-name-input')
      if (autofocus) {
        autofocus.value = ''
        setTimeout(() => autofocus.focus(), 0)
      }
    }
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
