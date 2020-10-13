import { Component, OnInit, OnDestroy } from '@angular/core'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs/Rx'
import * as responseAction from 'app/project/actions/response.action'
import * as fromProject from 'app/project/reducers'

@Component({
  selector: 'response-group',
  templateUrl: './response-group.component.html',
  styleUrls: ['./response-group.component.scss']
})
export class ResponseGroupComponent implements OnInit, OnDestroy {

  public response: {
    headers: any,
    body: any,
    delay: number,
    statusCode: number,
    isForward: boolean
    isFindOne: boolean
  }

  public getResponseResponseSub: Subscription

  constructor (
    private store: Store<any>
  ) {
    this.getResponseResponseSub = this.store.select(fromProject.getResponseResponse)
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

  saveIsForward (data) {
    this.response.isForward = data
    this.dispatch()
  }

  saveIsFindOne (data) {
    this.response.isFindOne = data
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

  dispatch () {
    this.store.dispatch(new responseAction.ResponseAction(this.response))
  }

  ngOnDestroy () {
    if (this.getResponseResponseSub) {
      this.getResponseResponseSub.unsubscribe()
    }
  }

}
