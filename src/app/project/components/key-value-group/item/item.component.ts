import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'key-value-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input('index') index: number
  @Input('entity') entity: any
  @Input('disableDelete') disableDelete: any
  @Input('keyReadOnly') keyReadOnly: any
  @Input('valueReadOnly') valueReadOnly: any
  @Output('blur') blur: EventEmitter<any>
  @Output('inputKey') inputKey: EventEmitter<any>
  @Output('inputValue') inputValue: EventEmitter<any>
  @Output('delete') delete: EventEmitter<any>
  public key: string
  public value: string

  constructor() {
    this.inputKey = new EventEmitter<any>()
    this.inputValue = new EventEmitter<any>()
    this.blur = new EventEmitter<any>()
    this.delete = new EventEmitter<any>()
  }

  ngOnInit() {
  }

  onKey (e) {
    this.entity.key = e.target.value
    this.inputValue.emit({
      index: this.index,
      key: this.entity.key,
      value: this.entity.value
    })
  }

  onKeyBlur (e) {
    this.blur.emit({
      index: this.index,
      key: this.entity.key,
      value: this.entity.value
    })
  }

  onValue (e) {
    this.entity.value = e.target.value
    this.inputValue.emit({
      index: this.index,
      key: this.entity.key,
      value: this.entity.value
    })
  }

  onValueBlur (e) {
    this.blur.emit({
      index: this.index,
      key: this.entity.key,
      value: this.entity.value
    })
  }

  onDelete () {
    this.delete.emit({})
  }

}
