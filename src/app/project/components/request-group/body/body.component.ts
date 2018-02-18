import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'request-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit, OnChanges {

  @Input('data') data: any
  @Output('save') save: EventEmitter<any>
  public text: any

  constructor () {
    this.save = new EventEmitter<any>()
  }


  ngOnChanges () {
    if (this.data && !this.text) {
      this.text = this.data
    } else if (!this.data && !this.text) {
      this.text = {}
    }
  }

  ngOnInit () {
  }

  onChange (data) {
    this.save.emit(data)
  }

}
