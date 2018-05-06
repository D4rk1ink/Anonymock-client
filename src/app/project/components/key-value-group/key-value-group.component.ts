import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core'
import * as json from 'app/project/utils/json.util'

@Component({
  selector: 'key-value-group',
  templateUrl: './key-value-group.component.html',
  styleUrls: ['./key-value-group.component.scss']
})
export class KeyValueGroupComponent implements OnInit, OnChanges {

  @Input('data') data: any[]
  @Input('temp') temp: any
  @Input('autoKey') autoKey: boolean
  @Input('readOnly') readOnly: boolean
  @Output('save') save: EventEmitter<any>
  public entities: any[]

  constructor() {
    this.save = new EventEmitter<any>()
    this.entities = []
    this.temp = {}
  }

  ngOnChanges () {
    if (this.data) {
      this.entities = Object.assign([], this.data)
      this.temp = Object.assign({}, this.temp, json.toJSON(this.data.filter(datum => datum.value !== undefined)))
      if (this.autoKey) {
        this.entities = this.entities.map(entity => {
          if (entity.value === undefined) {
            entity.value = this.temp[entity.key]
          }
          return entity
        })
      }
      this.addEmptyEntity()
    }
  }

  ngOnInit() {
  }

  onInputKey (data) {
    this.entities[data.index].key = data.key
    this.entities[data.index].value = data.value
    if (data.key !== '' && data.value === '') {
      this.entities[data.index].value = this.temp[data.key] || ''
    }
    this.addEmptyEntity()
  }

  onInputValue (data) {
    this.entities[data.index].key = data.key
    this.entities[data.index].value = data.value
    this.addEmptyEntity()
  }

  onBlur (data) {
    this.temp[data.key] = this.entities[data.index].value
    this.saveData()
  }

  addEmptyEntity () {
    if (this.autoKey || this.readOnly) return
    const notEmpty = this.entities.every(entity => {
      return entity.key !== '' || entity.value !== ''
    })

    if (notEmpty) {
      this.entities.push({ key: '', value: '' })
    }
  }

  onDelete (index) {
    this.entities.splice(index, 1)
    this.saveData()
    if (this.entities.length === 0) {
      this.entities.push({ key: '', value: '' })
    }
  }

  saveData () {
    this.save.emit({
      entities: Object.assign([], this.entities),
      temp: this.temp
    })
  }

}
