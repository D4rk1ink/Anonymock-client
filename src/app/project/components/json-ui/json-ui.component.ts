import { Component, OnInit, OnChanges, AfterContentChecked, Input, ElementRef, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'json-ui',
  templateUrl: './json-ui.component.html',
  styleUrls: ['./json-ui.component.scss']
})
export class JsonUiComponent implements OnInit, OnChanges {

  @Input('key') key: string = 'Objects'
  @Input('value') value = {
    "text": "abc",
    "number": 1,
    "boolean": false,
    "object": {
      "text2": "asde",
      "number2": 2
    },
    "item": [
      "a",
      "c",
      "f",
      "fr"
    ]
  }

  public isExpand: boolean
  public keyWidth: number
  public valueWidth: number

  constructor(
    private elRef: ElementRef
  ) {
    this.isExpand = true
  }

  ngAfterContentChecked () {
    this.setKeyWidth()
    if (!this.isJSON(this.value) && !this.isArray(this.value)) {
      this.setValueWidth()
    }
  }

  ngOnChanges (changes: SimpleChanges) {
    // const key: SimpleChange = changes.key
    // const value: SimpleChange = changes.value
  }

  ngOnInit() {
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

  onKeyChange (data) {
    this.setKeyWidth()
  }

  onValueChange (data) {
    this.setValueWidth()
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
