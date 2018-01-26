import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'response-group',
  templateUrl: './response-group.component.html',
  styleUrls: ['./response-group.component.scss']
})
export class ResponseGroupComponent implements OnInit {

  public headerData: any
  public bodyData: any
  public menuSelector: string
  public menu: any[] = [
    { id: 'M01', title: 'Header' },
    { id: 'M02', title: 'Body' },
  ]

  constructor () {
    this.menuSelector = this.menu[0].id
  }

  ngOnInit () {

  }

  onSelectMenu (id) {
    this.menuSelector = id
  }

  saveHeader (data) {
    this.headerData = data
  }

  saveBody (data) {
    this.bodyData = data
  }

}
