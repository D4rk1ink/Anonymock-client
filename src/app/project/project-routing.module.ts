import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { ProjectComponent } from './project.component'
import { DashboardComponent } from './containers/dashboard/dashboard.component'
import { ConfigComponent } from './containers/config/config.component'
import { DatabaseComponent } from './containers/database/database.component'
import { MemberComponent } from './containers/member/member.component'

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
    children: [{
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'config',
      component: ConfigComponent
    },
    {
      path: 'database',
      component: DatabaseComponent
    },
    {
      path: 'member',
      component: MemberComponent
    }]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectRoutingModule { }
