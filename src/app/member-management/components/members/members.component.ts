import { Component, OnInit, Input } from '@angular/core'
import { Store } from '@ngrx/store'
import { MemberService } from 'app/member-management/services/member.service'
import * as database from 'app/core/services/database.service'
import * as membersAction from 'app/member-management/actions/members.action'
import * as otherAction from 'app/core/actions/other.action'
import * as fromMembers from 'app/member-management/reducers'

@Component({
  selector: 'members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  public all: any[]
  public members: any[]
  public isLoading: boolean

  constructor (
    private store: Store<any>,
    private memberService: MemberService
  ) {
    this.store.select(fromMembers.getMembers)
      .subscribe(res => {
        this.isLoading = res.isLoading
        this.all = res.items
        this.members = res.items.filter(member => member.isApproved)
      })
  }

  ngOnInit () {
  }

  modalUserPopup (user) {
    this.store.dispatch(new otherAction.OtherUserPopupAction(user))
    this.store.dispatch(new otherAction.IsOtherUserPopupAction(true))
    this.store.dispatch(new otherAction.IsProfilePopupAction())
  }

  onAdmin (id, isAdmin) {
    if (this.isMyself(id)) return
    const payload = {
      isAdmin: isAdmin
    }
    this.memberService.admin(id, payload)
      .subscribe(res => {
        if (!res.error) {
          this.all = this.all.map(user => {
            if (user.id === id) {
              user.isAdmin = isAdmin
            }
            return user
          })
          this.store.dispatch(new membersAction.ItemsAction(this.all))
        }
      })
  }

  onDeactivate (id, deactivated) {
    if (this.isMyself(id)) return
    const payload = {
      deactivated: deactivated
    }
    this.memberService.deactivate(id, payload)
      .subscribe(res => {
        if (!res.error) {
          this.all = this.all.map(user => {
            if (user.id === id) {
              user.deactivated = deactivated
            }
            return user
          })
          this.store.dispatch(new membersAction.ItemsAction(this.all))
        }
      })
  }

  isMyself (id) {
    return database.getUser().id === id
  }

}
