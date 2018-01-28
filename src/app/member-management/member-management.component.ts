import { Component, OnInit } from '@angular/core';

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
      all: [
        {
          id: '51234564321534896',
          firstname: 'Passakorn',
          lastname: 'Rattanaprapan',
          email: 'passakorn_0@gmail.com',
          isAdmin: true,
          deactivated: false
        },
        {
          id: '52456481288224588',
          firstname: 'Passakorn',
          lastname: 'Rattanaprapan',
          email: 'passakorn_1@gmail.com',
          isAdmin: false,
          deactivated: false
        },
        {
          id: '21452348631257851',
          firstname: 'Passakorn',
          lastname: 'Rattanaprapan',
          email: 'passakorn_2@gmail.com',
          isAdmin: false,
          deactivated: false
        },
        {
          id: '84124523651224414',
          firstname: 'Passakorn',
          lastname: 'Rattanaprapan',
          email: 'passakorn_3@gmail.com',
          isAdmin: false,
          deactivated: true
        }
      ],
      request: [
        {
          id: '51234564321534896',
          firstname: 'Passakorn',
          lastname: 'Rattanaprapan',
          email: 'passakorn_0@gmail.com',
        },
        {
          id: '52456481288224588',
          firstname: 'Passakorn',
          lastname: 'Rattanaprapan',
          email: 'passakorn_1@gmail.com',
        }
      ]
    }
  }

  ngOnInit () {
  }

  onSelectMenu (id) {
    this.menuSelector = id
  }

}
