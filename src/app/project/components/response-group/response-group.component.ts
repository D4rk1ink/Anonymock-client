import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import * as responseAction from 'app/project/actions/response.action'
import * as fromProject from 'app/project/reducers'

@Component({
  selector: 'response-group',
  templateUrl: './response-group.component.html',
  styleUrls: ['./response-group.component.scss']
})
export class ResponseGroupComponent implements OnInit {

  public response: {
    headers: any,
    body: any,
    delay: number,
    statusCode: number,
    isFindOne: boolean
  }

  public temps: {
    headers: any
  }

  public menuSelector: string
  public menu: any[] = [
    { id: 'M01', title: 'Header' },
    { id: 'M02', title: 'Body' },
  ]

  constructor (
    private store: Store<any>
  ) {
    this.temps = {
      headers: {}
    }
    this.menuSelector = this.menu[0].id
    this.store.select(fromProject.getResponseResponse)
      .subscribe(response => {
        this.response = response
      })
  }

  ngOnInit () {

  }

  onSelectMenu (id) {
    this.menuSelector = id
  }

  saveHeader (data) {
    this.response.headers = data.entities
    this.temps.headers = data.temp
    this.dispatch()
  }

  saveBody (data) {
    this.response.body = data
    this.dispatch()
  }

  onDelayBlur (event) {
    this.response.delay = event.target.value
    this.dispatch()
  }

  onStatusCodeBlur (event) {
    this.response.statusCode = event.target.value
    this.dispatch()
  }

  onNumberKeyPress (event) {
    if (!Number.isInteger(+event.key)) {
      event.preventDefault()
    }
  }

  dispatch () {
    this.store.dispatch(new responseAction.ResponseAction(this.response))
  }

}
