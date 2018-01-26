import { Component, OnInit, OnChanges, Input } from '@angular/core';

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
  public isExpand: boolean
  public temp: any
  public keys: any[]
  public values: any[]
  public keyFocus: string
  public valueFocus: string
  constructor () {
    if (!this.auto) {
      this.temp = {}
    }
    this.keys = ['']
    this.values = ['']
  }

  ngOnChanges () {
    if (this.auto) {
      if (this.tempAuto && this.entities) {
        if (!this.temp) {
          this.temp = this.tempAuto
        }
        this.keys = []
        this.values = []
        for (const key of Object.keys(this.entities)) {
          this.keys.push(key)
          this.values.push(this.temp[key] || '')
        }
      }
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
  }

  onKey (e, i) {
    const key = e.target.value
    this.keys[i] = key
    if (this.keyFocus === '' && this.valueFocus === '') {
      this.values[i] = this.temp[key] || ''
    }
  }

  onValue (e, i) {
    const value = e.target.value
    this.values[i] = value
    this.temp[this.keys[i]] = value
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

}
