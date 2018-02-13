import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { Store } from '@ngrx/store'
import { MemberService } from 'app/project/services/member.service'
import * as projectAction from 'app/project/actions/project.action'
import * as fromProject from 'app/project/reducers'
import * as fromProjectReducer from 'app/project/reducers/project.reducer'

@Component({
  selector: 'member-management',
  templateUrl: './member-management.component.html',
  styleUrls: ['./member-management.component.scss']
})
export class MemberManagementComponent implements OnInit {

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
    this.store.select(fromProject.getProjectId)
      .subscribe(id => {
        this.projectId = id
        this.memberService.searchMember({
          project: id,
          search: ''
        })
          .subscribe(res => {
            if (!res.error) {
              this.members = res.data
            }
          })
      })
  }

  ngOnInit () {
  }

  onExit (id) {
    console.log(id)
  }

  onAdd (user) {
    if (!user.isMember) {
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

}
