import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-management',
  templateUrl: './member-management.component.html',
  styleUrls: ['./member-management.component.scss']
})
export class MemberManagementComponent implements OnInit {

  public menuSelector: string
  public menu: any[] = [
    { id: 'M01', title: 'Members' },
    { id: 'M02', title: 'Request' }
  ]

  constructor () {
    this.menuSelector = this.menu[0].id
  }

  ngOnInit () {
  }

  onSelectMenu (id) {
    this.menuSelector = id
  }

}
