import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ClipboardModule } from 'ngx-clipboard'
import { ProjectComponent } from './project.component'
import { ProjectRoutingModule } from './project-routing.module'
import { SharedModule } from '../shared/shared.module'

import { StoreModule } from '@ngrx/store'
import { projectReducers } from './reducers'

import { KeysPipe } from './pipes/keys/keys.pipe'
import { RangePipe } from './pipes/range/range.pipe'

import { DashboardComponent } from './containers/dashboard/dashboard.component'
import { ConfigComponent } from './containers/config/config.component'
import { MemberComponent } from './containers/member/member.component'
import { DatabaseComponent } from './containers/database/database.component'
import { ScraperComponent } from './containers/scraper/scraper.component'
import { EndpointsComponent } from './containers/endpoints/endpoints.component'
import { FoldersComponent } from './containers/folders/folders.component'
import { EndpointComponent } from './containers/endpoint/endpoint.component'
import { FolderComponent } from './containers/folder/folder.component'
import { ResponsesComponent } from './containers/responses/responses.component'
import { ResponseComponent } from './containers/response/response.component'
import { LogsComponent } from './containers/logs/logs.component'
import { LogComponent } from './containers/log/log.component'

import { EntityGroupComponent } from './components/entity-group/entity-group.component'
import { CodeEditorComponent } from './components/code-editor/code-editor.component'
import { DbSchemaComponent } from './components/db-schema/db-schema.component'
import { DbDataComponent } from './components/db-data/db-data.component'
import { DbGeneratorComponent } from './components/db-generator/db-generator.component'
import { GenerateComponent } from './components/db-generator/generate/generate.component'
import { CustomComponent } from './components/db-generator/custom/custom.component'
import { MemberManagementComponent } from './components/member-management/member-management.component'
import { ScraperDetailComponent } from './components/scraper-detail/scraper-detail.component'
import { ScraperEndpointDetailComponent } from './components/scraper-endpoint-detail/scraper-endpoint-detail.component'
import { ScraperEndpointComponent } from './containers/scraper-endpoint/scraper-endpoint.component'
import { ScraperEndpointListComponent } from './components/scraper-endpoint-list/scraper-endpoint-list.component'
import { ScraperRequestsComponent } from './components/scraper-requests/scraper-requests.component'
import { ScraperRequestComponent } from './components/scraper-request/scraper-request.component'
import { ParamGroupComponent } from './components/param-group/param-group.component'
import { EndpointGroupComponent } from './components/endpoint-group/endpoint-group.component'
import { EndpointDetailComponent } from './components/endpoint-detail/endpoint-detail.component'
import { LogGroupComponent } from './components/log-group/log-group.component'
import { LogResponseComponent } from './components/log-response/log-response.component'
import { LogRequestComponent } from './components/log-request/log-request.component'
import { TestcaseGroupComponent } from './components/testcase-group/testcase-group.component'
import { HttpMessagesComponent } from './components/http-messages/http-messages.component'
import { JsonUiComponent } from './components/json-ui/json-ui.component'
import { RequestGroupComponent } from './components/request-group/request-group.component'
import { ResponseGroupComponent } from './components/response-group/response-group.component'
import { KeyValueGroupComponent } from './components/key-value-group/key-value-group.component'
import { ItemComponent } from './components/key-value-group/item/item.component'
import { JsonMultiViewComponent } from './components/json-multi-view/json-multi-view.component'
import { FormMultiViewComponent } from './components/form-multi-view/form-multi-view.component'

import { ProjectService } from './services/project.service'
import { DatabaseService } from './services/database.service'
import { MemberService } from './services/member.service'
import { FolderService } from './services/folder.service'
import { ScraperService } from './services/scraper.service'
import { EndpointService } from './services/endpoint.service'
import { ResponseService } from './services/response.service'
import { LogService } from './services/log.service'
import { MethodService } from './services/method.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('project', projectReducers.project),
    StoreModule.forFeature('database', projectReducers.database),
    StoreModule.forFeature('folder', projectReducers.folder),
    StoreModule.forFeature('folders', projectReducers.folders),
    StoreModule.forFeature('methods', projectReducers.methods),
    StoreModule.forFeature('scraper', projectReducers.scraper),
    StoreModule.forFeature('endpoint', projectReducers.endpoint),
    StoreModule.forFeature('endpoints', projectReducers.endpoints),
    StoreModule.forFeature('response', projectReducers.response),
    StoreModule.forFeature('logs', projectReducers.logs),
    ClipboardModule,
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
    ScraperComponent,
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
    ScraperDetailComponent,
    ScraperEndpointComponent,
    ScraperEndpointDetailComponent,
    ScraperEndpointListComponent,
    ScraperRequestsComponent,
    ScraperRequestComponent,
    ParamGroupComponent,
    EndpointGroupComponent,
    EndpointDetailComponent,
    LogGroupComponent,
    LogResponseComponent,
    LogRequestComponent,
    TestcaseGroupComponent,
    HttpMessagesComponent,
    JsonUiComponent,
    RequestGroupComponent,
    ResponseGroupComponent,
    KeyValueGroupComponent,
    ItemComponent,
    JsonMultiViewComponent,
    FormMultiViewComponent,
  ],
  exports: [
    ProjectComponent,
    DashboardComponent,
    ConfigComponent,
    MemberComponent,
    DatabaseComponent,
    ScraperComponent,
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
    ScraperDetailComponent,
    ScraperEndpointComponent,
    ScraperEndpointDetailComponent,
    ScraperEndpointListComponent,
    ScraperRequestsComponent,
    ScraperRequestComponent,
    ParamGroupComponent,
    EndpointGroupComponent,
    EndpointDetailComponent,
    LogGroupComponent,
    LogResponseComponent,
    LogRequestComponent,
    TestcaseGroupComponent,
    HttpMessagesComponent,
    JsonUiComponent,
    RequestGroupComponent,
    ResponseGroupComponent,
    KeyValueGroupComponent,
    ItemComponent,
    JsonMultiViewComponent,
    FormMultiViewComponent,
  ],
  providers: [
    ProjectService,
    DatabaseService,
    MemberService,
    FolderService,
    ScraperService,
    EndpointService,
    ResponseService,
    LogService,
    MethodService
  ]
})
export class ProjectModule { }
