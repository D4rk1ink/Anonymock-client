import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs/Rx'
import { Store } from '@ngrx/store'
import { MemberService } from 'app/project/services/member.service'
import * as fromProject from 'app/project/reducers'
import * as database from 'app/core/services/database.service'
import * as otherAction from 'app/core/actions/other.action'

@Component({
  selector: 'member-management',
  templateUrl: './member-management.component.html',
  styleUrls: ['./member-management.component.scss']
})
export class MemberManagementComponent implements OnInit, OnDestroy {

  public isLoading: boolean
  public isManager: boolean
  public projectId: string
  public members: any[]
  public users: any[]
  public search: string
  public isSearchUser: boolean

  public getProjectSub: Subscription
  public searchSub: Subscription

  constructor (
    private store: Store<any>,
    private memberService: MemberService
  ) {
    this.isLoading = true
    this.members = []
    this.users = []
    this.search = ''
    this.getProjectSub = this.store.select(fromProject.getProject)
      .subscribe(project => {
        this.projectId = project.id
        this.isManager = project.isManager
        this.searchMember()
      })
  }

  ngOnInit () {
  }

  modalUserPopup (user) {
    this.store.dispatch(new otherAction.OtherUserPopupAction(user))
    this.store.dispatch(new otherAction.IsOtherUserPopupAction(true))
    this.store.dispatch(new otherAction.IsProfilePopupAction())
  }

  onExit (user) {
    if (this.isManager && !this.isMyself(user.id)) {
      this.memberService.exit(user.id)
        .subscribe(res => {
          if (!res.error) {
            this.members = this.members.filter(member => member.user.id !== user.id)
          }
        })
    }
  }

  onManager (user, isManager) {
    if (this.isManager && !this.isMyself(user.id)) {
      const payload = {
        isManager: isManager
      }
      this.memberService.manager(user.id, payload)
        .subscribe(res => {
          if (!res.error) {
            this.members = this.members.map(member => {
              if (member.user.id === user.id) {
                member.isManager = res.data.isManager
              }
              return member
            })
          }
        })
    }
  }

  onAdd (user) {
    if (this.isManager && !user.isMember) {
      this.memberService.addMember(user.id)
        .subscribe(res => {
          if (!res.error) {
            this.users = this.users.map(_user => {
              if (user.id === _user.id) {
                _user.isMember = true
              }
              return _user
            })
          }
        })
    }
  }

  onSearch (text) {
    this.search = text
    this.isLoading = true
    if (new RegExp('^add:(.*)').test(text)) {
      this.search = new RegExp('^add:(.*)').exec(text).slice(1).pop()
      this.isSearchUser = true
      this.searchUser()
    } else {
      this.isSearchUser = false
      this.searchMember()
    }
  }

  getSearchPayload () {
    return {
      project: this.projectId,
      search: this.search
    }
  }

  searchUser () {
    if (this.searchSub) {
      this.searchSub.unsubscribe()
    }
    this.searchSub = this.memberService.searchUser(this.getSearchPayload())
      .subscribe(res => {
        if (!res.error) {
          this.users = res.data
          this.isLoading = false
        }
      })
  }

  searchMember () {
    if (this.searchSub) {
      this.searchSub.unsubscribe()
    }
    this.searchSub = this.memberService.searchMember(this.getSearchPayload())
      .subscribe(res => {
        if (!res.error) {
          this.members = res.data
          this.isLoading = false
        }
      })
  }

  isMyself (id) {
    return database.getUser().id === id
  }

  ngOnDestroy () {
    if (this.getProjectSub) {
      this.getProjectSub.unsubscribe()
    }
    if (this.searchSub) {
      this.searchSub.unsubscribe()
    }
  }

}
