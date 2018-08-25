import { Component, OnInit, OnDestroy } from '@angular/core'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs/Rx'
import * as responseAction from 'app/project/actions/response.action'
import * as fromProject from 'app/project/reducers'

@Component({
  selector: 'request-group',
  templateUrl: './request-group.component.html',
  styleUrls: ['./request-group.component.scss']
})
export class RequestGroupComponent implements OnInit, OnDestroy {

  public condition: {
    params: any,
    headers: any,
    body: any,
    queryString: any
  }

  public getResponseConditionSub: Subscription

  constructor (
    private store: Store<any>
  ) {
    this.getResponseConditionSub = this.store.select(fromProject.getResponseCondition)
      .subscribe(condition => {
        this.condition = condition
      })
  }

  ngOnInit () {
  }

  saveHeader (data) {
    this.condition.headers = data
    this.dispatch()
  }

  saveBody (data) {
    this.condition.body = data
    this.dispatch()
  }

  saveQueryString (data) {
    this.condition.queryString = data
    this.dispatch()
  }

  dispatch () {
    this.store.dispatch(new responseAction.ConditionAction(this.condition))
  }

  ngOnDestroy () {
    if (this.getResponseConditionSub) {
      this.getResponseConditionSub.unsubscribe()
    }
  }
}
