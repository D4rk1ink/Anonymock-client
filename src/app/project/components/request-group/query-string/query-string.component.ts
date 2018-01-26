import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'request-query-string',
  templateUrl: './query-string.component.html',
  styleUrls: ['./query-string.component.scss']
})
export class QueryStringComponent implements OnInit {

  @Input('data') data: any
  @Output('save') save: EventEmitter<any>

  constructor () {
    this.save = new EventEmitter<any>()
  }

  ngOnInit () {
  }

  saveData (data) {
    this.save.emit(data)
  }

}
