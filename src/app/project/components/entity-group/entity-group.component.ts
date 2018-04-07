import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'entity-group',
  templateUrl: './entity-group.component.html',
  styleUrls: ['./entity-group.component.scss']
})
export class EntityGroupComponent implements OnInit, OnChanges {

  @Input('title') title: string
  @Input('entities') entities: any
  @Input('temp') temp: any
  @Input('autoKey') autoKey: boolean

  @Input('disableShadow') disableShadow: boolean
  
  @Output('save') save: EventEmitter<any>

  constructor () {
    this.save = new EventEmitter<any>()
    this.temp = {}
  }

  ngOnChanges () {

  }

  ngOnInit () {

  }

  saveData (data) {
    this.save.emit(data.entities)
  }

}
