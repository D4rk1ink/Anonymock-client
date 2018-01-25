import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'key-value-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Output('saveTemp') saveTemp: EventEmitter<any>
  public key: string
  public value: string

  constructor() {
    this.saveTemp = new EventEmitter<any>()
  }

  ngOnInit() {
  }

  onKey (e) {
    const key = e.target.value
    this.key = key
  }

  onValue (e) {
    const value = e.target.value
    this.value = value
    this.saveTemp.emit({ key: this.key, value: this.value })
  }

}
