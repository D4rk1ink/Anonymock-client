import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'entity-group',
  templateUrl: './entity-group.component.html',
  styleUrls: ['./entity-group.component.scss']
})
export class EntityGroupComponent implements OnInit {

  @Input('title') title: string
  public isExpand: boolean
  public entities: any
  public temp: any
  public keys: any[]
  public values: any[]
  public keyFocus: string
  public valueFocus: string
  constructor () {
    this.entities = {}
    this.temp = {}
    this.keys = ['']
    this.values = ['']
  }

  ngOnInit () {
  }
  
  onKeyFocus (e, i) {
    this.keyFocus = this.keys[i]
    this.valueFocus = this.values[i]
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
    this.isExpand = !this.isExpand
  }

  onNew () {
    if (this.keys.every(key => key !== '')) {
      this.keys.push('')
      this.values.push('')
    }
  }

}
