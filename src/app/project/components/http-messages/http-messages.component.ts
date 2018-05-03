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

  @Input('isFindOneInput') isFindOneInput: boolean
  @Input('statusCodeInput') statusCodeInput: boolean
  @Input('delayInput') delayInput: boolean

  @Input('header') headers: any
  @Input('body') body: any
  @Input('queryString') queryString: any

  @Input('isFindOne') isFindOne: boolean
  @Input('statusCode') statusCode: number
  @Input('delay') delay: number

  @Input('disableShadow') disableShadow: boolean
  @Input('readOnly') readOnly: boolean

  @Output('outputHeader') outputHeaders: EventEmitter<any>
  @Output('outputBody') outputBody: EventEmitter<any>
  @Output('outputQueryString') outputQueryString: EventEmitter<any>

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

  public multiViewSelector: string
  public multiView: any[] = [
    { id: 'V01', title: 'Viewer' },
    { id: 'V02', title: 'Split' },
    { id: 'V03', title: 'Coding' },
  ]

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

    this.outputIsFindOne = new EventEmitter<any>()
    this.outputStatusCode = new EventEmitter<any>()
    this.outputDelay = new EventEmitter<any>()
  }

  ngOnChanges () {
    try {
      if (Array.isArray(this.headers)) {
        this.jsonUI.headers = JSON.stringify(json.toJSON(this.headers), null, 4)
      }
    } catch (err) { }

    try {
      if (typeof this.body === 'string') {
        this.jsonUI.body = JSON.parse(this.body)
      } else {
        this.jsonUI.body = this.body
      }
    } catch (err) { }

    try {
      if (Array.isArray(this.queryString)) {
        this.jsonUI.queryString = json.pretty(this.queryString)
      }
    } catch (err) { }
  }

  ngOnInit() {
    if (this.headerTab) this.tab.push(this.tabAll[0])
    if (this.bodyTab) this.tab.push(this.tabAll[1])
    if (this.queryStringTab) this.tab.push(this.tabAll[2])
    this.multiViewSelector = (this.multiView[0] && this.multiView[0].id) || null
    this.tabSelector = (this.tab[0] && this.tab[0].id) || null
  }

  onSelectMenu (id) {
    this.tabSelector = id
  }

  onSelectMultView (id) {
    this.multiViewSelector = id
  }

  saveHeaders (data) {
    try {
      if (this.jsonUI.headers !== json.pretty(data)) {
        const headers = json.toArray(JSON.parse(data))
        this.outputHeaders.emit(headers)
      }
    } catch (err) {}
  }

  saveBody (data) {
    if (!data) {
      data = "{}"
    }
    this.outputBody.emit(data)
  }

  saveQueryString (data) {
    try {
      if (this.jsonUI.queryString !== json.pretty(data)) {
        const queryString = json.toArray(JSON.parse(data))
        this.outputQueryString.emit(queryString)
      }
    } catch (err) {}
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

  saveHeadersFromUI (data) {
    this.outputHeaders.emit(data.entities)
  }

  saveBodyFromUI (data) {
    this.outputBody.emit(JSON.stringify(data, null, 4))
  }

  saveQueryStringFromUI (data) {
    this.outputQueryString.emit(data.entities)
  }

  onNumberKeyPress (event) {
    if (!Number.isInteger(+event.key)) {
      event.preventDefault()
    }
  }

}
