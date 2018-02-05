import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AceEditorModule } from 'ng2-ace-editor'

import { MainLayoutComponent } from './components/main-layout/main-layout.component'
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { BoxTabsComponent } from './components/box-tabs/box-tabs.component';

import { InterceptorService } from './services/interceptor.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
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
    HttpClientModule,
    AceEditorModule,

    MainLayoutComponent,
    LeftMenuComponent,
    SearchInputComponent,
    BoxTabsComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ]
})
export class SharedModule { }
