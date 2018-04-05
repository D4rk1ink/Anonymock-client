import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import * as responseAction from 'app/project/actions/response.action'
import * as fromProject from 'app/project/reducers'

@Component({
  selector: 'request-group',
  templateUrl: './request-group.component.html',
  styleUrls: ['./request-group.component.scss']
})
export class RequestGroupComponent implements OnInit {
  
  public condition: {
    params: any,
    headers: any,
    body: any,
    queryString: any
  }

  constructor (
    private store: Store<any>
  ) {
    this.store.select(fromProject.getResponseCondition)
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
}
