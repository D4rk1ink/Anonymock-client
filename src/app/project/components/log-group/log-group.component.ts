import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'log-group',
  templateUrl: './log-group.component.html',
  styleUrls: ['./log-group.component.scss']
})
export class LogGroupComponent implements OnInit {

  @Input('logs') logs: any[]
  public logTarget: string

  constructor () { }

  ngOnInit () {
  }

  onExpand (id) {
    this.logTarget = id
  }

}
