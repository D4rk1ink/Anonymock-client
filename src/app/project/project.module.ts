import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { ProjectRoutingModule } from './project-routing.module';
import { DashboardComponent } from './containers/dashboard/dashboard.component'
import { SharedModule } from '../shared/shared.module'

import { KeysPipe } from './pipes/keys/keys.pipe';
import { ConfigComponent } from './containers/config/config.component';
import { MemberComponent } from './containers/member/member.component';
import { DatabaseComponent } from './containers/database/database.component';
import { EndpointComponent } from './containers/endpoint/endpoint.component';
import { FolderComponent } from './containers/folder/folder.component';
import { ResponseComponent } from './containers/response/response.component'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProjectRoutingModule
  ],
  declarations: [
    KeysPipe,

    ProjectComponent,
    DashboardComponent,
    ConfigComponent,
    MemberComponent,
    DatabaseComponent,
    EndpointComponent,
    FolderComponent,
    ResponseComponent
  ],
  exports: [
    ProjectComponent,
    DashboardComponent,
    ConfigComponent,
    MemberComponent,
    DatabaseComponent,
    EndpointComponent,
    FolderComponent,
    ResponseComponent
  ]
})
export class ProjectModule { }
