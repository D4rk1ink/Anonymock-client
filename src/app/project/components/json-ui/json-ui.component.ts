import { Component, OnInit, OnChanges, AfterContentChecked, Input, Output, EventEmitter, ElementRef, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'json-ui',
  templateUrl: './json-ui.component.html',
  styleUrls: ['./json-ui.component.scss']
})
export class JsonUiComponent implements OnInit, OnChanges {

  @Input('init') init: any
  @Input('key') key: string = 'Objects'
  @Input('value') value: any
  @Input('index') index: number
  @Output('outputUpdate') outputUpdate: EventEmitter<any>

  public isExpand: boolean
  public keyWidth: number
  public valueWidth: number
  public TYPE = {
    NORMAL: 'NORMAL',
    JSON: 'JSON',
    ARRAY: 'ARRAY'
  }

  constructor(
    private elRef: ElementRef
  ) {
    this.outputUpdate = new EventEmitter<any>()
    this.isExpand = true
  }

  ngAfterContentChecked () {
    if (this.init) {
    }
    this.setKeyWidth()
    if (this.value.type === this.TYPE.NORMAL) {
      this.setValueWidth()
    }
  }

  ngOnChanges (changes: SimpleChanges) {
    const init: SimpleChange = changes.init
    if (init && !init.previousValue && init.currentValue) {
      this.value = this.coverData(this.init)
    }
    const key: SimpleChange = changes.key
    const value: SimpleChange = changes.value
  }

  ngOnInit() {
  }

  coverData (data) {
    const value: { type: string, data: any } = { type: this.TYPE.NORMAL, data: '' }
    if (this.isJSON(data)) {
      value.type = this.TYPE.JSON
      value.data = []
      for (const key in data) {
        value.data.push({
          key: key,
          value: this.coverData(data[key])
        })
      }
    } else if (this.isArray(data)) {
      value.type = this.TYPE.ARRAY
      value.data = []
      for (const datum of data) {
        value.data.push(this.coverData(datum))
      }
    } else {
      value.type = this.TYPE.NORMAL
      value.data = data
    }
    return value
  }

  updateChild (action) {
    switch (action.type) {
      case 'update':
        this.value.data[action.index] = (this.value.type === this.TYPE.JSON) ? action.payload : action.payload.value
        break
      case 'delete':
        this.value.data = this.value.data.filter((datum, i) => action.index !== i)
    }
    if (this.init) {
      console.log(this.value)
    } else {
      this.outputUpdate.emit({
        type: action.type,
        index: this.index,
        payload: {
          key: this.key,
          value: this.value
        }
      })
    }
  }

  onExpand () {
    this.isExpand = !this.isExpand
  }

  isJSON (data) {
    return typeof data === 'object' && !Array.isArray(data)
  }

  isArray (data) {
    return Array.isArray(data)
  }

  newData (type, data) {
    switch (this.value.type) {
      case this.TYPE.JSON:
        this.addToJSON(type, data)
        break
      case this.TYPE.ARRAY:
        this.addToArray(type, data)
        break
    }
  }

  addToJSON (type, data) {
    this.value.data.push({
      key: '',
      value: {
        type: type,
        data: data
      }
    })
  }

  addToArray (type, data) {
    this.value.data.push({
      type: type,
      data: data
    })
  }

  addElement (type) {
    const data = (type === this.TYPE.NORMAL) ? '' : []
    this.newData(type, data)
  }

  onInputBlur (event) {
    this.outputUpdate.emit({
      type: 'update',
      index: this.index,
      payload: {
        key: this.key,
        value: this.value
      }
    })
  }

  setKeyWidth () {
    const hiddenKey = this.elRef.nativeElement.querySelector('#hidden-key')
    this.keyWidth = hiddenKey.offsetWidth + 13
  }

  setValueWidth () {
    const hiddenValue = this.elRef.nativeElement.querySelector('#hidden-value')
    this.valueWidth = hiddenValue.offsetWidth + 13
  }

}
