import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'log-response',
  templateUrl: './log-response.component.html',
  styleUrls: ['./log-response.component.scss']
})
export class LogResponseComponent implements OnInit {

  @Input('data') data: any[]

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

}
