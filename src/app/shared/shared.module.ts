import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AceEditorModule } from 'ng2-ace-editor'
import { CoreModule } from 'app/core/core.module'

import { MainLayoutComponent } from './components/main-layout/main-layout.component'
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { BoxTabsComponent } from './components/box-tabs/box-tabs.component';

import { ProjectService } from 'app/project/services/project.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    AceEditorModule,
    CoreModule
  ],
  declarations: [
    MainLayoutComponent,
    LeftMenuComponent,
    SearchInputComponent,
    BoxTabsComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    AceEditorModule,
    CoreModule,

    MainLayoutComponent,
    LeftMenuComponent,
    SearchInputComponent,
    BoxTabsComponent,
  ],
  providers: [
    ProjectService
  ]
})
export class SharedModule { }
