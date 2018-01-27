import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberManagementComponent } from './member-management.component';
import { MemberManagementRoutingModule } from './member-management-routing.module';
import { SharedModule } from '../shared/shared.module';

import { RequestComponent } from './components/request/request.component';
import { MembersComponent } from './components/members/members.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MemberManagementRoutingModule
  ],
  declarations: [
    MemberManagementComponent,
    RequestComponent,
    MembersComponent,
  ],
  exports: [
    MemberManagementComponent,
    RequestComponent,
    MembersComponent,
  ]
})
export class MemberManagementModule { }
