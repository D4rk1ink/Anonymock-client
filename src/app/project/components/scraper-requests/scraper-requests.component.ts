import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'scraper-requests',
  templateUrl: './scraper-requests.component.html',
  styleUrls: ['./scraper-requests.component.scss']
})
export class ScraperRequestsComponent implements OnInit {

  @Input('requests') requests: any[]

  @Input('disableShadow') disableShadow: boolean

  @Output('create') create: EventEmitter<any>
  @Output('goto') goto: EventEmitter<any>

  constructor() {
    this.create = new EventEmitter<any>()
    this.goto = new EventEmitter<any>()
  }

  ngOnInit() {
  }

  createRequest () {
    this.create.emit()
  }

  gotoRequest (request) {
    this.goto.emit(request)
  }

}
