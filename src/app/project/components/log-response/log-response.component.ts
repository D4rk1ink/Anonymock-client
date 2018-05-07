import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'log-response',
  templateUrl: './log-response.component.html',
  styleUrls: ['./log-response.component.scss']
})
export class LogResponseComponent implements OnInit {

  @Input('data') data: any

  constructor () {}

  ngOnInit () {
  }

}
