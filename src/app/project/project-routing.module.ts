import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { ProjectComponent } from './project.component'
import { DashboardComponent } from './containers/dashboard/dashboard.component'
import { ConfigComponent } from './containers/config/config.component'
import { DatabaseComponent } from './containers/database/database.component'
import { MemberComponent } from './containers/member/member.component'
import { EndpointsComponent } from './containers/endpoints/endpoints.component'
import { FoldersComponent } from './containers/folders/folders.component'
import { EndpointComponent } from './containers/endpoint/endpoint.component'
import { FolderComponent } from './containers/folder/folder.component'
import { ResponsesComponent } from './containers/responses/responses.component'
import { ResponseComponent } from './containers/response/response.component'
import { LogsComponent } from './containers/logs/logs.component'
import { LogComponent } from './containers/log/log.component'

const routes: Routes = [
  {
    path: ':project-id',
    component: ProjectComponent,
    children: [
      {
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
      },
      {
        path: 'endpoint',
        component: EndpointsComponent
      },
      {
        path: 'endpoint/:endpoint-id',
        component: EndpointComponent,
        children: [
          {
            path: '',
            component: ResponsesComponent
          },
          {
            path: ':response-id',
            component: ResponseComponent
          }
        ]
      },
      {
        path: 'folder',
        component: FoldersComponent
      },
      {
        path: 'folder/:folder-id',
        component: FolderComponent
      },
      {
        path: 'log',
        component: LogsComponent
      },
      {
        path: 'log/:log-id',
        component: LogComponent
      },
      {
        path: '**',
        redirectTo: 'endpoint'
      }
    ]
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
