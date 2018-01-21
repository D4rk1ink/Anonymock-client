import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'member-management',
  templateUrl: './member-management.component.html',
  styleUrls: ['./member-management.component.scss']
})
export class MemberManagementComponent implements OnInit {

  public members: any[]

  constructor () {
    this.members = [
      {
        id: '51234564321534896',
        firstname: 'Passakorn',
        lastname: 'Rattanaprapan',
        email: 'passakorn_0@gmail.com',
        position: 'manager'
      },
      {
        id: '52456481288224588',
        firstname: 'Passakorn',
        lastname: 'Rattanaprapan',
        email: 'passakorn_1@gmail.com',
        position: 'manager'
      },
      {
        id: '21452348631257851',
        firstname: 'Passakorn',
        lastname: 'Rattanaprapan',
        email: 'passakorn_2@gmail.com',
        position: 'normal'
      },
      {
        id: '84124523651224414',
        firstname: 'Passakorn',
        lastname: 'Rattanaprapan',
        email: 'passakorn_3@gmail.com',
        position: 'normal'
      }
    ]
  }

  ngOnInit () {
  }

  onExit (id) {
    console.log(id)
  }

}
