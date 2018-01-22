import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { ProjectRoutingModule } from './project-routing.module';
import { DashboardComponent } from './containers/dashboard/dashboard.component'
import { SharedModule } from '../shared/shared.module'

import { KeysPipe } from './pipes/keys/keys.pipe';
import { RangePipe } from './pipes/range/range.pipe'

import { ConfigComponent } from './containers/config/config.component';
import { MemberComponent } from './containers/member/member.component';
import { DatabaseComponent } from './containers/database/database.component';
import { EndpointsComponent } from './containers/endpoints/endpoints.component';
import { FoldersComponent } from './containers/folders/folders.component';
import { EndpointComponent } from './containers/endpoint/endpoint.component';
import { FolderComponent } from './containers/folder/folder.component';
import { ResponseComponent } from './containers/response/response.component';

import { EntityGroupComponent } from './components/entity-group/entity-group.component';
import { CodeEditorComponent } from './components/code-editor/code-editor.component';
import { DbGeneratorComponent } from './components/db-generator/db-generator.component';
import { GenerateComponent } from './components/db-generator/generate/generate.component';
import { CustomComponent } from './components/db-generator/custom/custom.component';
import { MemberManagementComponent } from './components/member-management/member-management.component';
import { EndpointsGroupComponent } from './components/endpoints-group/endpoints-group.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProjectRoutingModule
  ],
  declarations: [
    KeysPipe,
    RangePipe,

    ProjectComponent,
    DashboardComponent,
    ConfigComponent,
    MemberComponent,
    DatabaseComponent,
    EndpointsComponent,
    FoldersComponent,
    EndpointComponent,
    FolderComponent,
    ResponseComponent,

    EntityGroupComponent,
    CodeEditorComponent,
    DbGeneratorComponent,
    GenerateComponent,
    CustomComponent,
    MemberManagementComponent,
    EndpointsGroupComponent,
  ],
  exports: [
    ProjectComponent,
    DashboardComponent,
    ConfigComponent,
    MemberComponent,
    DatabaseComponent,
    EndpointsComponent,
    FoldersComponent,
    EndpointComponent,
    FolderComponent,
    ResponseComponent,
    
    EntityGroupComponent,
    CodeEditorComponent,
    DbGeneratorComponent,
    GenerateComponent,
    CustomComponent,
    MemberManagementComponent,
    EndpointsGroupComponent
  ]
})
export class ProjectModule { }
