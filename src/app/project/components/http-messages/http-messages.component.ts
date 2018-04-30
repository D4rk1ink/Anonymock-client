import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core'

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

  @Input('header') header: any
  @Input('body') body: any
  @Input('queryString') queryString: any

  @Input('isFindOne') isFindOne: boolean
  @Input('statusCode') statusCode: number
  @Input('delay') delay: number

  @Input('disableShadow') disableShadow: boolean
  @Input('readOnly') readOnly: boolean

  @Output('outputHeader') outputHeader: EventEmitter<any>
  @Output('outputBody') outputBody: EventEmitter<any>
  @Output('outputQueryString') outputQueryString: EventEmitter<any>

  @Output('outputIsFindOne') outputIsFindOne: EventEmitter<any>
  @Output('outputStatusCode') outputStatusCode: EventEmitter<any>
  @Output('outputDelay') outputDelay: EventEmitter<any>

  public jsonUI = {
    body: {}
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
    this.outputHeader = new EventEmitter<any>()
    this.outputBody = new EventEmitter<any>()
    this.outputQueryString = new EventEmitter<any>()

    this.outputIsFindOne = new EventEmitter<any>()
    this.outputStatusCode = new EventEmitter<any>()
    this.outputDelay = new EventEmitter<any>()
  }

  ngOnChanges () {
    try {
      if (typeof this.body === 'string') {
        this.jsonUI.body = JSON.parse(this.body)
      } else {
        this.jsonUI.body = this.body
      }
    } catch (err) { }
  }

  ngOnInit() {
    if (this.headerTab) this.tab.push(this.tabAll[0])
    if (this.bodyTab) this.tab.push(this.tabAll[1])
    if (this.queryStringTab) this.tab.push(this.tabAll[2])
    this.tabSelector = (this.tab[0] && this.tab[0].id) || null
  }

  onSelectMenu (id) {
    this.tabSelector = id
  }

  saveHeader (data) {
    this.outputHeader.emit(data.entities)
  }

  saveBody (data) {
    if (!data) {
      data = "{}"
    }
    this.outputBody.emit(data)
  }

  saveQueryString (data) {
    this.outputQueryString.emit(data.entities)
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

  saveBodyFromJsonUI (data) {
    this.outputBody.emit(JSON.stringify(data, null, 4))
  }

  onNumberKeyPress (event) {
    if (!Number.isInteger(+event.key)) {
      event.preventDefault()
    }
  }

}
