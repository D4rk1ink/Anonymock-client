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
  @Input('keyReadOnly') keyReadOnly: boolean
  @Output('outputUpdate') outputUpdate: EventEmitter<any>
  @Output('save') save: EventEmitter<any>

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
    this.save = new EventEmitter<any>()
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
    if (init) {
      this.value = this.coverForComponent(this.init)
    }
  }

  ngOnInit() {
  }

  coverForComponent (data) {
    const value: { type: string, data: any } = { type: this.TYPE.NORMAL, data: '' }
    if (this.isJSON(data)) {
      value.type = this.TYPE.JSON
      value.data = []
      for (const key in data) {
        value.data.push({
          key: key,
          value: this.coverForComponent(data[key])
        })
      }
    } else if (this.isArray(data)) {
      value.type = this.TYPE.ARRAY
      value.data = []
      for (const datum of data) {
        value.data.push(this.coverForComponent(datum))
      }
    } else {
      value.type = this.TYPE.NORMAL
      value.data = data
    }
    return value
  }

  convertToJSON (value) {
    if (value.type === this.TYPE.JSON) {
      const out = {}
      for (const datum of value.data) {
        out[datum.key] = this.convertToJSON(datum.value)
      }
      return out
    } else if (value.type === this.TYPE.ARRAY) {
      const out = []
      for (const datum of value.data) {
        out.push(this.convertToJSON(datum))
      }
      return out
    } else {
      return value.data
    }
  }

  updateChild (action) {
    switch (action.type) {
      case 'update':
        this.value.data[action.index] = (this.value.type === this.TYPE.JSON) ? action.payload : action.payload.value
        break
      case 'delete':
        this.value.data = this.value.data.filter((datum, i) => action.index !== i)
    }
    this.sendUp()
  }

  sendUp () {
    if (this.init) {
      const data = this.convertToJSON(this.value)
      this.save.emit(data)
    } else {
      this.outputUpdate.emit(this.getUpdataAction())
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
        this.sendUp()
        break
      case this.TYPE.ARRAY:
        this.addToArray(type, data)
        this.sendUp()
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
    let canNew = true
    if (this.value.type === this.TYPE.JSON) {
      const hasEmptyKey = this.value.data.find(datum => datum.key === '')
      if (hasEmptyKey) {
        canNew = false
      }
    }
    if (canNew) {
      const data = (type === this.TYPE.NORMAL) ? '' : []
      this.newData(type, data)
    }
  }

  deleteElement () {
    this.outputUpdate.emit(this.getDeleteAction())
  }

  convertValueType (type) {
    switch (type) {
      case 'string':
        this.value.data = this.value.data.toString()
        break
      case 'number':
        if (!isNaN(this.value.data)) {
          this.value.data = Number(this.value.data)
        }
        break
      case 'boolean':
        this.value.data = this.value.data === 'true' || this.value.data === 1
        break
    }
    this.sendUp()
  }

  onInputBlur (event?) {
    this.sendUp()
  }

  typeOfValue (value) {
    return typeof value
  }

  setKeyWidth () {
    const hiddenKey = this.elRef.nativeElement.querySelector('#hidden-key')
    this.keyWidth = hiddenKey.offsetWidth + 13
  }

  setValueWidth () {
    const hiddenValue = this.elRef.nativeElement.querySelector('#hidden-value')
    this.valueWidth = hiddenValue.offsetWidth + 13
  }

  getTypeOf () {
    return typeof this.value.data
  }

  getUpdataAction () {
    return {
      type: 'update',
      index: this.index,
      payload: {
        key: this.key,
        value: this.value
      }
    }
  }

  getDeleteAction () {
    return {
      type: 'delete',
      index: this.index,
    }
  }

}
