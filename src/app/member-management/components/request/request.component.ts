import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store'
import { MemberService } from '../../services/member.service'
import * as membersAction from '../../actions/members.action'
import * as fromMembers from '../../reducers'

@Component({
  selector: 'request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  
  public all: any[]
  public requests: any[]

  constructor(
    private store: Store<any>,
    private memberService: MemberService
  ) {
    this.store.select(fromMembers.getMembers)
      .subscribe(members => {
        this.all = members
        this.requests = members.filter(member => !member.isApproved)
      })
  }

  ngOnInit() {
  }

  onApprove (id) {
    const payload = {
      approve: true
    }
    this.memberService.approve(id, payload)
      .subscribe(res => {
        if (!res.error) {
          this.all = this.all.map(user => {
            if (user.id === id) {
              user.isApproved = true
            }
            return user
          })
          this.store.dispatch(new membersAction.MembersAction(this.all))
        }
      })
  }

  onReject (id) {
    const payload = {
      approve: false
    }
    this.memberService.approve(id, payload)
      .subscribe(res => {
        if (!res.error) {
          this.all = this.all.filter(user => {
            return user.id !== id
          })
          this.store.dispatch(new membersAction.MembersAction(this.all))
        }
      })
  }

}
