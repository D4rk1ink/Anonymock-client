import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'key-value-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  
  @Input('index') index: number
  @Input('entity') entity: any
  @Output('saveTemp') saveTemp: EventEmitter<any>
  @Output('delete') delete: EventEmitter<any>
  public key: string
  public value: string

  constructor() {
    this.saveTemp = new EventEmitter<any>()
    this.delete = new EventEmitter<any>()
  }

  ngOnInit() {
  }

  onKey (e) {
    this.entity.key = e.target.value
    this.saveTemp.emit({
      index: this.index,
      key: this.entity.key,
      value: this.entity.value
    })
  }

  onValue (e) {
    this.entity.value = e.target.value
    this.saveTemp.emit({ index: this.index, key: this.entity.key, value: this.entity.value })
  }

  onDelete () {
    this.delete.emit({})
  }

}
