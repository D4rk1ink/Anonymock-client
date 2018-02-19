import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'entity-group',
  templateUrl: './entity-group.component.html',
  styleUrls: ['./entity-group.component.scss']
})
export class EntityGroupComponent implements OnInit, OnChanges {

  @Input('title') title: string
  @Input('entities') entities: any
  @Input('auto') auto: boolean
  @Input('tempAuto') tempAuto: any
  @Output('out') out: EventEmitter<any>
  public dataLength: number
  public isExpand: boolean
  public temp: any
  public keys: any[]
  public values: any[]
  public keyFocus: string
  public valueFocus: string
  constructor () {
    this.out = new EventEmitter<any>()
    this.dataLength = 0
    this.temp = {}
    this.keys = ['']
    this.values = ['']
  }

  ngOnChanges () {
    if (this.entities) {
      if (this.entities instanceof String) {
        this.entities = JSON.parse(this.entities.toString())
      }
      const entitiesTemp = {}
      for (const key in this.entities) {
        if (this.entities[key] !== undefined) {
          entitiesTemp[key] = this.entities[key]
        }
      }
      this.temp = {
        ...this.temp,
        ...entitiesTemp
      }
      this.keys = []
      this.values = []
      for (const key of Object.keys(this.entities)) {
        this.keys.push(key)
        this.values.push(this.temp[key] || '')
      }
      if (this.auto && this.dataLength !== this.keys.length) {
        this.onOut()
      }
      this.dataLength = this.keys.length
    } else {
      
    }
  }

  ngOnInit () {
    this.isExpand = this.auto
  }
  
  onKeyFocus (e, i) {
    this.keyFocus = this.keys[i]
    this.valueFocus = this.values[i]
  }

  onKeyBlur (e, i) {
    const key = e.target.value
    this.temp[key] = this.values[i]
    this.onOut()
  }

  onKey (e, i) {
    const key = e.target.value
    this.keys[i] = key
    if (this.keyFocus === '' && this.valueFocus === '') {
      this.values[i] = this.temp[key] || ''
    }
  }

  onValueBlur (e, i) {
    const value = e.target.value
    this.values[i] = value
    this.temp[this.keys[i]] = value
    this.onOut()
  }

  onValue (e, i) {
    
  }

  onExpand () {
    if (!this.auto) {
      this.isExpand = !this.isExpand
    }
  }

  onNew () {
    if (this.keys.every(key => key !== '')) {
      this.keys.push('')
      this.values.push('')
    }
  }

  onOut () {
    const entities = {}
    this.keys.forEach((key, i) => {
      entities[key] = this.values[i]
    })
    this.out.emit(entities)
  }

}
