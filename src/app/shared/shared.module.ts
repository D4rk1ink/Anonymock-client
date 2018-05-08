import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AceEditorModule } from 'ng2-ace-editor'

import { MainLayoutComponent } from './components/main-layout/main-layout.component'
import { LeftMenuComponent } from './components/left-menu/left-menu.component'
import { HomeComponent } from './components/home/home.component'
import { SearchInputComponent } from './components/search-input/search-input.component'
import { BoxTabsComponent } from './components/box-tabs/box-tabs.component'
import { ProfileDropdownComponent } from './components/profile-dropdown/profile-dropdown.component'
import { ProfilePopupComponent } from './components/profile-popup/profile-popup.component'
import { RectLoadingComponent } from './components/rect-loading/rect-loading.component'
import { EmptyItemComponent } from './components/empty-item/empty-item.component'
import { AddItemBarComponent } from './components/add-item-bar/add-item-bar.component'
import { ConfirmBoxComponent } from './components/confirm-box/confirm-box.component'
import { NotificationComponent } from './components/notification/notification.component'

import { ConfirmService } from './services/confirm.service'
import { NotificationService } from './services/notification.service'
import { ProjectService } from 'app/project/services/project.service'
import { UserService } from 'app/my-account/services/user.service';

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
    HomeComponent,
    SearchInputComponent,
    BoxTabsComponent,
    ProfileDropdownComponent,
    ProfilePopupComponent,
    RectLoadingComponent,
    EmptyItemComponent,
    AddItemBarComponent,
    ConfirmBoxComponent,
    NotificationComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AceEditorModule,

    MainLayoutComponent,
    LeftMenuComponent,
    HomeComponent,
    SearchInputComponent,
    BoxTabsComponent,
    ProfileDropdownComponent,
    ProfilePopupComponent,
    RectLoadingComponent,
    EmptyItemComponent,
    AddItemBarComponent,
    ConfirmBoxComponent,
    NotificationComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ConfirmService,
        NotificationService,
        ProjectService,
        UserService
      ]
    }
  }
}
