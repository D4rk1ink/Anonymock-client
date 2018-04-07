import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges, SimpleChange } from '@angular/core'

@Component({
  selector: 'param-group',
  templateUrl: './param-group.component.html',
  styleUrls: ['./param-group.component.scss']
})
export class ParamGroupComponent implements OnInit, OnChanges {

  @Input('path') path: string
  @Input('params') params: any

  constructor() { }

  ngOnChanges (changes: SimpleChanges) {
    const path: SimpleChange = changes.path
    if (path && path.previousValue !== path.currentValue) {
      this.paramsFilter()
    }
  }

  ngOnInit() {
  }

  saveParam (data) {
    console.log(data)
  }

  paramsFilter () {
    if (!this.path || !this.params) return
    const paramPattern = /{{\s*([A-Za-z0-9\-]+)\s*}}/g
    const match = this.path.match(paramPattern) || []
    const keys = match
      .map(token => (new RegExp(paramPattern).exec(token) || [null, '']).slice(1).pop())
      .filter((param, i, arr) => param && param !== '' && !new RegExp(/\.{2,}|\.$/g).test(param) && arr.indexOf(param) === i)
    const temp = [...this.params]
    this.params = []
    for (const key of keys) {
      const param = temp.find(param => param.key === key)
      if (param) {
        this.params.push(param)
      } else {
        this.params.push({ key: key, value: undefined })
      }
    }
  }

}
