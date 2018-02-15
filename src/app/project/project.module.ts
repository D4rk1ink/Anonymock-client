import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { ProjectRoutingModule } from './project-routing.module';
import { SharedModule } from '../shared/shared.module'

import { StoreModule } from '@ngrx/store'
import { projectReducers } from './reducers'

import { KeysPipe } from './pipes/keys/keys.pipe'
import { RangePipe } from './pipes/range/range.pipe'

import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { ConfigComponent } from './containers/config/config.component';
import { MemberComponent } from './containers/member/member.component';
import { DatabaseComponent } from './containers/database/database.component';
import { EndpointsComponent } from './containers/endpoints/endpoints.component';
import { FoldersComponent } from './containers/folders/folders.component';
import { EndpointComponent } from './containers/endpoint/endpoint.component';
import { FolderComponent } from './containers/folder/folder.component';
import { ResponsesComponent } from './containers/responses/responses.component';
import { ResponseComponent } from './containers/response/response.component';
import { LogsComponent } from './containers/logs/logs.component';
import { LogComponent } from './containers/log/log.component';

import { EntityGroupComponent } from './components/entity-group/entity-group.component';
import { CodeEditorComponent } from './components/code-editor/code-editor.component';
import { DbSchemaComponent } from './components/db-schema/db-schema.component';
import { DbDataComponent } from './components/db-data/db-data.component';
import { DbGeneratorComponent } from './components/db-generator/db-generator.component';
import { GenerateComponent } from './components/db-generator/generate/generate.component';
import { CustomComponent } from './components/db-generator/custom/custom.component';
import { MemberManagementComponent } from './components/member-management/member-management.component';
import { EndpointGroupComponent } from './components/endpoint-group/endpoint-group.component';
import { LogGroupComponent } from './components/log-group/log-group.component';
import { LogResponseComponent } from './components/log-response/log-response.component';
import { LogRequestComponent } from './components/log-request/log-request.component';
import { TestcaseGroupComponent } from './components/testcase-group/testcase-group.component';
import { RequestGroupComponent } from './components/request-group/request-group.component';
import { ResponseGroupComponent } from './components/response-group/response-group.component';
import { KeyValueGroupComponent } from './components/key-value-group/key-value-group.component';
import { ItemComponent } from './components/key-value-group/item/item.component';
import { HeaderComponent } from './components/request-group/header/header.component';
import { BodyComponent } from './components/request-group/body/body.component';
import { QueryStringComponent } from './components/request-group/query-string/query-string.component';
import { InputAddMemberComponent } from './components/input-add-member/input-add-member.component';

import { ProjectService } from './services/project.service';
import { DatabaseService } from './services/database.service';
import { MemberService } from './services/member.service';
import { FolderService } from './services/folder.service';
import { EndpointService } from './services/endpoint.service';
// import { ResponseService } from './services/response.service';
import { MethodService } from './services/method.service';

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
    LogsComponent,
    LogComponent,

    EntityGroupComponent,
    CodeEditorComponent,
    DbSchemaComponent,
    DbDataComponent,
    DbGeneratorComponent,
    GenerateComponent,
    CustomComponent,
    MemberManagementComponent,
    EndpointGroupComponent,
    LogGroupComponent,
    LogResponseComponent,
    LogRequestComponent,
    TestcaseGroupComponent,
    RequestGroupComponent,
    ResponseGroupComponent,
    KeyValueGroupComponent,
    ItemComponent,
    HeaderComponent,
    BodyComponent,
    QueryStringComponent,
    InputAddMemberComponent,
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
    LogsComponent,
    LogComponent,
    
    EntityGroupComponent,
    CodeEditorComponent,
    DbSchemaComponent,
    DbDataComponent,
    DbGeneratorComponent,
    GenerateComponent,
    CustomComponent,
    MemberManagementComponent,
    EndpointGroupComponent,
    LogGroupComponent,
    LogResponseComponent,
    LogRequestComponent,
    TestcaseGroupComponent,
    RequestGroupComponent,
    ResponseGroupComponent,
    KeyValueGroupComponent,
    ItemComponent,
    HeaderComponent,
    BodyComponent,
    QueryStringComponent,
    InputAddMemberComponent,
  ],
  providers: [
    ProjectService,
    DatabaseService,
    MemberService,
    FolderService,
    EndpointService,
    // ResponseService,
    MethodService
  ]
})
export class ProjectModule { }
