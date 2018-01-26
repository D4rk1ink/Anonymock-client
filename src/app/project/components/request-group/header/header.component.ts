import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'request-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
