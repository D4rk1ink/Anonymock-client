import { Component, OnInit } from '@angular/core';
import { members } from 'app/mock/members'

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

  constructor () {
    this.menuSelector = this.menu[0].id
    this.members = {
      all: members.filter(member => member.approve),
      request: members.filter(member => !member.approve)
    }
  }

  ngOnInit () {
  }

  onSelectMenu (id) {
    this.menuSelector = id
  }

}
