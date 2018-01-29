import { Component, OnInit } from '@angular/core';
import { projects } from 'app/mock/projects'
@Component({
  selector: 'left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  public isNewProject: boolean
  public menuTarget: string
  public projects: any[]

  constructor () {
    this.projects = projects
  }

  ngOnInit () {
  }

  onTarget (id: string) {
    this.menuTarget = id
  }

  onNewProject () {
    this.isNewProject = !this.isNewProject
  }

  onSubmitNewProject () {

  }

}
