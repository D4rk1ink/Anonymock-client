import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'json-multi-view',
  templateUrl: './json-multi-view.component.html',
  styleUrls: ['./json-multi-view.component.scss']
})
export class JsonMultiViewComponent implements OnInit, OnChanges {

  @Input('data') data: any
  @Output('save') save: EventEmitter<any>

  public dataUI: any

  public multiViewSelector: string
  public multiView: any[] = [
    { id: 'V01', title: 'Viewer' },
    { id: 'V02', title: 'Split' },
    { id: 'V03', title: 'Coding' },
  ]

  constructor () {
    this.save = new EventEmitter<any>()
  }

  ngOnChanges () {
    try {
      if (typeof this.data === 'string') {
        this.dataUI = JSON.parse(this.data)
      } else {
        this.dataUI = this.data
      }
    } catch (err) { }
  }

  ngOnInit () {
    this.multiViewSelector = (this.multiView[0] && this.multiView[0].id) || null
  }

  onSelectMultView (id) {
    this.multiViewSelector = id
  }

  saveFromUI (data) {
    this.save.emit(JSON.stringify(data, null, 4))
  }

  saveFromCode (data) {
    if (!data) {
      data = "{}"
    }
    this.save.emit(data)
  }

}
