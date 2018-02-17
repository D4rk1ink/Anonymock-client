import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
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

  public searchSub: Subscription

  constructor (
    private store: Store<any>,
    private memberService: MemberService
  ) {
    this.menuSelector = this.menu[0].id
    this.search('')
  }

  ngOnInit () {
  }

  onSelectMenu (id) {
    this.menuSelector = id
  }

  onSearch (search) {
    this.search(search)
  }

  search (search) {
    if (this.searchSub) {
      this.searchSub.unsubscribe()
    }
    this.searchSub = this.memberService.search({ search })
      .subscribe(res => {
        if (!res.error) {
          const members = res.data
          this.store.dispatch(new membersAction.MembersAction(members))
        }
      })
  }

}
