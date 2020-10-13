import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core'
import * as json from 'app/project/utils/json.util';

@Component({
  selector: 'http-messages',
  templateUrl: './http-messages.component.html',
  styleUrls: ['./http-messages.component.scss']
})
export class HttpMessagesComponent implements OnInit, OnChanges {

  @Input('headerTab') headerTab: boolean
  @Input('bodyTab') bodyTab: boolean
  @Input('queryStringTab') queryStringTab: boolean

  @Input('isForwardInput') isForwardInput: boolean
  @Input('isFindOneInput') isFindOneInput: boolean
  @Input('statusCodeInput') statusCodeInput: boolean
  @Input('delayInput') delayInput: boolean

  @Input('header') headers: any
  @Input('body') body: any
  @Input('queryString') queryString: any

  @Input('isForward') isForward: boolean
  @Input('isFindOne') isFindOne: boolean
  @Input('statusCode') statusCode: number
  @Input('delay') delay: number

  @Input('disableShadow') disableShadow: boolean
  @Input('readOnly') readOnly: boolean

  @Output('outputHeader') outputHeaders: EventEmitter<any>
  @Output('outputBody') outputBody: EventEmitter<any>
  @Output('outputQueryString') outputQueryString: EventEmitter<any>

  @Output('outputIsForward') outputIsForward: EventEmitter<any>
  @Output('outputIsFindOne') outputIsFindOne: EventEmitter<any>
  @Output('outputStatusCode') outputStatusCode: EventEmitter<any>
  @Output('outputDelay') outputDelay: EventEmitter<any>

  public jsonUI = {
    headers: '{}',
    body: {},
    queryString: '{}'
  }

  public temp: {
    headers: any,
    body: any,
    queryString: any
  }

  public tabSelector: string
  public tabAll: any[] = [
    { id: 'T01', title: 'Header' },
    { id: 'T02', title: 'Body' },
    { id: 'T03', title: 'Query String' },
  ]
  public tab: any[] = []

  constructor() {
    this.outputHeaders = new EventEmitter<any>()
    this.outputBody = new EventEmitter<any>()
    this.outputQueryString = new EventEmitter<any>()

    this.outputIsForward = new EventEmitter<any>()
    this.outputIsFindOne = new EventEmitter<any>()
    this.outputStatusCode = new EventEmitter<any>()
    this.outputDelay = new EventEmitter<any>()
  }

  ngOnChanges () {
  }

  ngOnInit() {
    if (this.headerTab) this.tab.push(this.tabAll[0])
    if (this.bodyTab) this.tab.push(this.tabAll[1])
    if (this.queryStringTab) this.tab.push(this.tabAll[2])
    this.tabSelector = (this.tab[1] && this.tab[1].id) || null
  }

  onSelectMenu (id) {
    this.tabSelector = id
  }

  saveHeaders (data) {
    this.outputHeaders.emit(data)
  }

  saveBody (data) {
    if (!data) {
      data = "{}"
    }
    this.outputBody.emit(data)
  }

  saveQueryString (data) {
    this.outputQueryString.emit(data)
  }

  saveIsForward (data) {
    this.outputIsForward.emit(data)
  }

  saveIsFindOne (data) {
    this.outputIsFindOne.emit(data)
  }

  saveStatusCode (data) {
    this.outputStatusCode.emit(data)
  }

  saveDelay (data) {
    this.outputDelay.emit(data)
  }

  onNumberKeyPress (event) {
    if (!Number.isInteger(+event.key)) {
      event.preventDefault()
    }
  }

}
