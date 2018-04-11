import { Component, OnInit } from '@angular/core'
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

  constructor (
    private store: Store<any>
  ) {
    this.store.select(fromProject.getResponseResponse)
      .subscribe(response => {
        this.response = response
      })
  }

  ngOnInit () {
  }

  saveHeader (data) {
    this.response.headers = data
    this.dispatch()
  }

  saveBody (data) {
    this.response.body = data
    this.dispatch()
  }

  saveDelay (data) {
    this.response.delay = data
    this.dispatch()
  }

  saveStatusCode (data) {
    this.response.statusCode = data
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
