import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { ProjectComponent } from './project.component'
import { DashboardComponent } from './containers/dashboard/dashboard.component'
import { ConfigComponent } from './containers/config/config.component'
import { DatabaseComponent } from './containers/database/database.component'
import { MemberComponent } from './containers/member/member.component'
import { ScraperComponent } from './containers/scraper/scraper.component'
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
        component: DashboardComponent,
        data: { level: 0 }
      },
      {
        path: 'config',
        component: ConfigComponent,
        data: { level: 1 }
      },
      {
        path: 'database',
        component: DatabaseComponent,
        data: { level: 2 }
      },
      {
        path: 'member',
        component: MemberComponent,
        data: { level: 3 }
      },
      {
        path: 'scraper',
        component: ScraperComponent,
        data: { level: 3.5 }
      },
      {
        path: 'endpoint',
        component: EndpointsComponent,
        data: { level: 4 }
      },
      {
        path: 'endpoint/:endpoint-id',
        component: EndpointComponent,
        data: { level: 41 },
        children: [
          {
            path: '',
            component: ResponsesComponent,
            data: { level: 411 },
          },
          {
            path: ':response-id',
            component: ResponseComponent,
            data: { level: 412 },
          }
        ]
      },
      {
        path: 'folder',
        component: FoldersComponent,
        data: { level: 5 },
      },
      {
        path: 'folder/:folder-id',
        component: FolderComponent,
        data: { level: 51 },
      },
      {
        path: 'log',
        component: LogsComponent,
        data: { level: 6 },
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
