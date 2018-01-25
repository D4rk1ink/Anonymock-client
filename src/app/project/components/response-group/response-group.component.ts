import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'response-group',
  templateUrl: './response-group.component.html',
  styleUrls: ['./response-group.component.scss']
})
export class ResponseGroupComponent implements OnInit {

  public environment: string
  public responses: any[]

  constructor () {
    this.responses = [
      {
        id: 'Xu6ooc2seeG',
        name: 'When user id is 001',
        isDefault: false
      },
      {
        id: 'Zeeb3shiequ',
        name: 'When user id is 002',
        isDefault: true
      },
      {
        id: 'chisie1oHai',
        name: 'When user id is 003',
        isDefault: false
      },
    ]
  }

  ngOnInit () {
  }

  onNew () {
  }

}
