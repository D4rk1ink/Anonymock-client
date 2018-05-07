import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import * as json from 'app/project/utils/json.util';

@Component({
  selector: 'form-multi-view',
  templateUrl: './form-multi-view.component.html',
  styleUrls: ['./form-multi-view.component.scss']
})
export class FormMultiViewComponent implements OnInit {

  @Input('data') data: any
  @Input('readOnly') readOnly: boolean
  @Output('save') save: EventEmitter<any>

  public dataCode: any

  public multiViewSelector: string
  public multiView: any[] = [
    { id: 'V01', title: 'Viewer' },
    { id: 'V02', title: 'Split' },
    { id: 'V03', title: 'Code' },
  ]

  constructor () {
    this.save = new EventEmitter<any>()
  }

  ngOnChanges () {
    try {
      if (Array.isArray(this.data)) {
        this.dataCode = JSON.stringify(json.toJSON(this.data), null, 4)
      }
    } catch (err) { }
  }

  ngOnInit () {
    this.multiViewSelector = (this.multiView[2] && this.multiView[2].id) || null
  }

  onSelectMultView (id) {
    this.multiViewSelector = id
  }

  saveFromUI (data) {
    this.save.emit(data.entities)
  }

  saveFromCode (data) {
    try {
      data = json.toArray(JSON.parse(data))
      this.save.emit(data)
    } catch (err) {}
  }

}
