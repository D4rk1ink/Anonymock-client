import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'log-request',
  templateUrl: './log-request.component.html',
  styleUrls: ['./log-request.component.scss']
})
export class LogRequestComponent implements OnInit {

  public menuSelector: string
  public menu: any[] = [
    { id: 'M01', title: 'Header' },
    { id: 'M02', title: 'Body' },
    { id: 'M03', title: 'Client' },
  ]

  constructor () {
    this.menuSelector = this.menu[0].id
  }

  ngOnInit () {
  }

}
