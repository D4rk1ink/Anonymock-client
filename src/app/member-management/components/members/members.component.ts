import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store'
import { MemberService } from 'app/member-management/services/member.service'
import * as database from 'app/core/services/database.service'
import * as membersAction from 'app/member-management/actions/members.action'
import * as fromMembers from 'app/member-management/reducers'

@Component({
  selector: 'members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  public all: any[]
  public members: any[]

  constructor (
    private store: Store<any>,
    private memberService: MemberService
  ) {
    this.store.select(fromMembers.getMembers)
      .subscribe(members => {
        this.all = members
        this.members = members.filter(member => member.isApproved)
      })
  }

  ngOnInit () {
  }

  onAdmin (id, isAdmin) {
    if (this.isYourself(id)) return
    const payload = {
      id: id,
      isAdmin: isAdmin
    }
    this.memberService.admin(payload)
      .subscribe(res => {
        if (!res.error) {
          this.all = this.all.map(user => {
            if (user.id === id) {
              user.isAdmin = isAdmin
            }
            return user
          })
          this.store.dispatch(new membersAction.MembersAction(this.all))
        }
      })
  }

  onDeactivate (id, deactivated) {
    if (this.isYourself(id)) return
    const payload = {
      id: id,
      deactivated: deactivated
    }
    this.memberService.deactivate(payload)
      .subscribe(res => {
        if (!res.error) {
          this.all = this.all.map(user => {
            if (user.id === id) {
              user.deactivated = deactivated
            }
            return user
          })
          this.store.dispatch(new membersAction.MembersAction(this.all))
        }
      })
  }

  isYourself (id) {
    return database.getUser().id === id
  }

}
