import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import * as json from 'app/project/utils/json.util'

@Component({
  selector: 'key-value-group',
  templateUrl: './key-value-group.component.html',
  styleUrls: ['./key-value-group.component.scss']
})
export class KeyValueGroupComponent implements OnInit, OnChanges {

  @Input('data') data: any
  @Input('temp') temp: any
  @Output('save') save: EventEmitter<any>
  public entities: any[]

  constructor() {
    this.save = new EventEmitter<any>()
    this.entities = [
      {
        key: '',
        value: ''
      }
    ]
    this.temp = {}
  }

  ngOnChanges () {
    if (this.data) {
      this.entities = Object.assign([], this.data)
      console.log(this.entities)
      this.temp = Object.assign({}, this.temp, json.toJSON(this.data))
      this.addEmptyEntity()
    }
  }

  ngOnInit() {
  }

  onKeyInput (data) {
    this.entities[data.index].key = data.key
    this.entities[data.index].value = data.value
    if (data.key !== '' && data.value === '') {
      this.entities[data.index].value = this.temp[data.key] || ''
    }
    this.addEmptyEntity()
  }

  onBlur (data) {
    this.temp[data.key] = this.entities[data.index].value 
    this.saveData()
  }

  addEmptyEntity () {
    const notEmpty = this.entities.every(entity => {
      return entity.key !== '' || entity.value !== ''
    })

    if (notEmpty) {
      this.entities.push({ key: '', value: '' })
    }
  }

  onDelete (index) {
    this.entities.splice(index, 1)
    if (this.entities.length === 0) {
      this.entities.push({ key: '', value: '' })
    }
    this.saveData()
  }

  saveData () {
    this.save.emit({
      entities: Object.assign([], this.entities.filter(json => json.key !== '')),
      temp: this.temp
    })
  }

}
