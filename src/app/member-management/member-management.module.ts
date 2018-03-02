import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberManagementComponent } from './member-management.component';
import { MemberManagementRoutingModule } from './member-management-routing.module';
import { SharedModule } from '../shared/shared.module';

import { StoreModule } from '@ngrx/store'
import { membersReducers } from './reducers'

import { RequestComponent } from './components/request/request.component';
import { MembersComponent } from './components/members/members.component';

import { MemberService } from 'app/member-management/services/member.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('member', membersReducers.members),
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
  ],
  providers: [
    MemberService
  ]
})
export class MemberManagementModule { }
