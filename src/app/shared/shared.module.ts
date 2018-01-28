import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AceEditorModule } from 'ng2-ace-editor'

import { MainLayoutComponent } from './components/main-layout/main-layout.component'
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { BoxTabsComponent } from './components/box-tabs/box-tabs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AceEditorModule
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
    AceEditorModule,

    MainLayoutComponent,
    LeftMenuComponent,
    SearchInputComponent,
    BoxTabsComponent,
  ]
})
export class SharedModule { }
