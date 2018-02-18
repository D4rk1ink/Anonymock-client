import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountComponent } from './my-account.component';
import { MyAccountRoutingModule } from './my-account-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ProfileComponent } from './containers/profile/profile.component';
import { ChangePasswordComponent } from './containers/change-password/change-password.component';

import { UserService } from 'app/my-account/services/user.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MyAccountRoutingModule
  ],
  declarations: [
    MyAccountComponent,
    ProfileComponent,
    ChangePasswordComponent
  ],
  exports: [
    MyAccountComponent,
    ProfileComponent,
    ChangePasswordComponent
  ],
  providers: [
    UserService
  ]
})
export class MyAccountModule { }
