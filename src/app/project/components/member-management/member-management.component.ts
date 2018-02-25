import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { Store } from '@ngrx/store'
import { MemberService } from 'app/project/services/member.service'
import * as fromProject from 'app/project/reducers'
import * as database from 'app/core/services/database.service';

@Component({
  selector: 'member-management',
  templateUrl: './member-management.component.html',
  styleUrls: ['./member-management.component.scss']
})
export class MemberManagementComponent implements OnInit {

  public isManager: boolean
  public projectId: string
  public members: any[]
  public users: any[]
  public search: string
  public selectOption: string

  public searchSub: Subscription

  constructor (
    private store: Store<any>,
    private memberService: MemberService
  ) {
    this.selectOption = 'search'
    this.members = []
    this.users = []
    this.search = ''
    this.store.select(fromProject.getProject)
      .subscribe(project => {
        this.projectId = project.id
        this.isManager = project.isManager
        this.searchMember()
      })
  }

  ngOnInit () {
  }

  onExit (user) {
    if (this.isManager && !this.isMyself(user.id)) {
      const payload = {
        project: this.projectId,
        user: user.id
      }
      this.memberService.exit(payload)
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
        project: this.projectId,
        user: user.id,
        isManager: isManager
      }
      this.memberService.manager(payload)
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
      const payload = {
        project: this.projectId,
        user: user.id
      }
      this.memberService.addMember(payload)
        .subscribe(res => {
          if (!res.error) {
            this.members = [res.data, ...this.members]
          }
        })
    }
  }

  onInput (text) {
    this.search = text
    if (this.selectOption === 'add') { 
      this.searchUser()
    } else if (this.selectOption === 'search') {
      this.searchMember()
    }
  }

  onSelect () {
    this.search = ''
    this.users = []
    if (this.selectOption === 'search') {
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
        }
      })
  }

  isMyself (id) {
    return database.getUser().id === id
  }

}
