import { Component, OnInit } from '@angular/core';
import { MemberService } from './services/member.service'
import { members } from 'app/mock/members'
import { Store } from '@ngrx/store'
import * as membersAction from './actions/members.action'
import * as fromMembers from './reducers'

@Component({
  selector: 'app-member-management',
  templateUrl: './member-management.component.html',
  styleUrls: ['./member-management.component.scss']
})
export class MemberManagementComponent implements OnInit {

  public members: any
  public menuSelector: string
  public menu: any[] = [
    { id: 'M01', title: 'Members' },
    { id: 'M02', title: 'Request' }
  ]

  constructor (
    private store: Store<any>,
    private memberService: MemberService
  ) {
    this.menuSelector = this.menu[0].id
    this.memberService.getMembers()
      .subscribe(res => {
        if (!res.error) {
          const members = res.data
          this.store.dispatch(new membersAction.MembersAction(members))
          // this.members = {
          //   all: members.filter(member => member.isApproved),
          //   request: members.filter(member => !member.isApproved)
          // }
        }
      })
    // this.members = {
    //   all: members.filter(member => member.approve),
    //   request: members.filter(member => !member.approve)
    // }
  }

  ngOnInit () {
  }

  onSelectMenu (id) {
    this.menuSelector = id
  }

}
