import { Component, OnInit, OnDestroy, Input } from '@angular/core'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs/Rx'
import { MemberService } from '../../services/member.service'
import * as membersAction from '../../actions/members.action'
import * as fromMembers from '../../reducers'

@Component({
  selector: 'request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit, OnDestroy {

  public all: any[]
  public requests: any[]
  public isLoading: boolean

  public getMembersSub: Subscription

  constructor(
    private store: Store<any>,
    private memberService: MemberService
  ) {
    this.getMembersSub = this.store.select(fromMembers.getMembers)
      .subscribe(res => {
        this.isLoading = res.isLoading
        this.all = res.items
        this.requests = res.items.filter(member => !member.isApproved)
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
          this.store.dispatch(new membersAction.ItemsAction(this.all))
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
          this.store.dispatch(new membersAction.ItemsAction(this.all))
        }
      })
  }

  ngOnDestroy () {
    if (this.getMembersSub) {
      this.getMembersSub.unsubscribe()
    }
  }

}
