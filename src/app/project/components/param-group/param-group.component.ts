import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges, SimpleChange } from '@angular/core'

@Component({
  selector: 'param-group',
  templateUrl: './param-group.component.html',
  styleUrls: ['./param-group.component.scss']
})
export class ParamGroupComponent implements OnInit, OnChanges {

  @Input('path') path: string
  @Input('params') params: any
  @Output('save') save: EventEmitter<any>

  public _params: any[] = []

  constructor() {
    this.save = new EventEmitter<any>()
  }

  ngOnChanges (changes: SimpleChanges) {
    this.paramsFilter()
  }

  ngOnInit() {
  }

  saveParam (data) {
    this.save.emit(data)
  }

  paramsFilter () {
    if (!this.path || !this.params) return
    const paramPattern = /{{\s*([A-Za-z0-9\-]+)\s*}}/g
    const match = this.path.match(paramPattern) || []
    const keys = match
      .map(token => (new RegExp(paramPattern).exec(token) || [null, '']).slice(1).pop())
      .filter((param, i, arr) => param && param !== '' && !new RegExp(/\.{2,}|\.$/g).test(param) && arr.indexOf(param) === i)
    const temp = [...this.params]
    this._params = []
    for (const key of keys) {
      const param = temp.find(param => param.key === key)
      if (param) {
        this._params.push(param)
      } else {
        this._params.push({ key: key, value: undefined })
      }
    }
  }

}
