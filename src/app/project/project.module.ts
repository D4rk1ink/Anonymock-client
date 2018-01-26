import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { ProjectRoutingModule } from './project-routing.module';
import { DashboardComponent } from './containers/dashboard/dashboard.component'
import { SharedModule } from '../shared/shared.module'

import { StoreModule } from '@ngrx/store'
import { projectReducers } from './reducers'

import { KeysPipe } from './pipes/keys/keys.pipe'
import { RangePipe } from './pipes/range/range.pipe'

import { ConfigComponent } from './containers/config/config.component';
import { MemberComponent } from './containers/member/member.component';
import { DatabaseComponent } from './containers/database/database.component';
import { EndpointsComponent } from './containers/endpoints/endpoints.component';
import { FoldersComponent } from './containers/folders/folders.component';
import { EndpointComponent } from './containers/endpoint/endpoint.component';
import { FolderComponent } from './containers/folder/folder.component';
import { ResponsesComponent } from './containers/responses/responses.component';
import { ResponseComponent } from './containers/response/response.component';

import { EntityGroupComponent } from './components/entity-group/entity-group.component';
import { CodeEditorComponent } from './components/code-editor/code-editor.component';
import { DbGeneratorComponent } from './components/db-generator/db-generator.component';
import { GenerateComponent } from './components/db-generator/generate/generate.component';
import { CustomComponent } from './components/db-generator/custom/custom.component';
import { MemberManagementComponent } from './components/member-management/member-management.component';
import { EndpointGroupComponent } from './components/endpoint-group/endpoint-group.component';
import { TestcaseGroupComponent } from './components/testcase-group/testcase-group.component';
import { RequestGroupComponent } from './components/request-group/request-group.component';
import { ResponseGroupComponent } from './components/response-group/response-group.component';
import { KeyValueGroupComponent } from './components/key-value-group/key-value-group.component';
import { ItemComponent } from './components/key-value-group/item/item.component';
import { HeaderComponent } from './components/request-group/header/header.component';
import { BodyComponent } from './components/request-group/body/body.component';
import { QueryStringComponent } from './components/request-group/query-string/query-string.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(projectReducers),
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
    ResponsesComponent,
    ResponseComponent,

    EntityGroupComponent,
    CodeEditorComponent,
    DbGeneratorComponent,
    GenerateComponent,
    CustomComponent,
    MemberManagementComponent,
    EndpointGroupComponent,
    TestcaseGroupComponent,
    RequestGroupComponent,
    ResponseGroupComponent,
    KeyValueGroupComponent,
    ItemComponent,
    HeaderComponent,
    BodyComponent,
    QueryStringComponent,
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
    ResponsesComponent,
    ResponseComponent,
    
    EntityGroupComponent,
    CodeEditorComponent,
    DbGeneratorComponent,
    GenerateComponent,
    CustomComponent,
    MemberManagementComponent,
    EndpointGroupComponent,
    TestcaseGroupComponent,
    RequestGroupComponent,
    ResponseGroupComponent,
    KeyValueGroupComponent,
    ItemComponent,
    HeaderComponent,
    BodyComponent,
    QueryStringComponent,
  ]
})
export class ProjectModule { }
