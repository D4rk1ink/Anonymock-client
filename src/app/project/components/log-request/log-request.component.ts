import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'log-request',
  templateUrl: './log-request.component.html',
  styleUrls: ['./log-request.component.scss']
})
export class LogRequestComponent implements OnInit {

  @Input('data') data: any[]

  constructor () { }

  ngOnInit () {
  }

}
