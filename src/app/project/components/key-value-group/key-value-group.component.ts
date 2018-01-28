import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'key-value-group',
  templateUrl: './key-value-group.component.html',
  styleUrls: ['./key-value-group.component.scss']
})
export class KeyValueGroupComponent implements OnInit, OnChanges {

  @Input('data') data: any
  @Output('save') save: EventEmitter<any>
  public entities: any[]
  public temp: any

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
      this.entities = this.data.entities
      this.temp = this.data.temp
    }
  }

  ngOnInit() {
  }

  saveTemp (data) {
    this.entities[data.index].key = data.key
    this.entities[data.index].value = data.value
    if (data.key !== '' && data.value === '') {
      this.entities[data.index].value = this.temp[data.key]
    }
    this.temp[data.key] = data.value
    this.addEmptyEntity()
    this.save.emit({
      entities: this.entities,
      temp: this.temp
    })
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
  }

}
