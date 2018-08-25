import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs/Rx'
import { MemberService } from 'app/member-management/services/member.service'
import * as membersAction from 'app/member-management/actions/members.action'
import * as fromMembers from 'app/member-management/reducers'

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit, OnDestroy {

  public members: any[]
  public searchMember: string

  public tabSelector: string
  public tabAll: any[] = [
    { id: 'M01', title: 'Members' },
    { id: 'M02', title: 'Request' }
  ]

  public getMembersSearchSub: Subscription
  public searchSub: Subscription

  constructor (
    private store: Store<any>,
    private memberService: MemberService
  ) {
    this.tabSelector = this.tabAll[0].id
    this.getMembersSearchSub = this.store.select(fromMembers.getMembersSearch)
      .subscribe(search => {
        if (this.searchMember !== search) {
          this.searchMember = search
          this.search()
        }
      })
  }

  ngOnInit () {
  }

  onSelectMenu (id) {
    this.tabSelector = id
  }

  onSearch (search) {
    this.store.dispatch(new membersAction.ItemsAction(search))
  }

  search () {
    if (this.searchSub) {
      this.searchSub.unsubscribe()
    }
    this.store.dispatch(new membersAction.IsLoadingAction(true))
    this.searchSub = this.memberService.search({ search: this.searchMember })
      .subscribe(res => {
        if (!res.error) {
          this.store.dispatch(new membersAction.ItemsAction(res.data))
          this.store.dispatch(new membersAction.IsLoadingAction(false))
        }
      })
  }

  ngOnDestroy () {
    if (this.getMembersSearchSub) {
      this.getMembersSearchSub.unsubscribe()
    }
    if (this.searchSub) {
      this.searchSub.unsubscribe()
    }
  }

}
