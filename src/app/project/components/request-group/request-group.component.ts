import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'request-group',
  templateUrl: './request-group.component.html',
  styleUrls: ['./request-group.component.scss']
})
export class RequestGroupComponent implements OnInit {

  public menuSelector: string
  public menu: any[] = [
    { id: 'M01', title: 'Header' },
    { id: 'M02', title: 'Body' },
    { id: 'M03', title: 'Query String' },
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
