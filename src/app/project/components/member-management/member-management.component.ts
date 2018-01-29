import { Component, OnInit } from '@angular/core';
import { members } from 'app/mock/members'

@Component({
  selector: 'member-management',
  templateUrl: './member-management.component.html',
  styleUrls: ['./member-management.component.scss']
})
export class MemberManagementComponent implements OnInit {

  public members: any[]

  constructor () {
    this.members = [
      members[0],
      members[1],
      members[2],
    ]
  }

  ngOnInit () {
  }

  onExit (id) {
    console.log(id)
  }

}
