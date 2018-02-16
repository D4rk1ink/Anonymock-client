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

  public temps: {
    headers: any,
    queryString: any
  }

  public menuSelector: string
  public menu: any[] = [
    { id: 'M01', title: 'Header' },
    { id: 'M02', title: 'Body' },
    { id: 'M03', title: 'Query String' },
  ]

  constructor (
    private store: Store<any>
  ) {
    this.temps = {
      headers: {},
      queryString: {}
    }
    this.menuSelector = this.menu[0].id
    this.store.select(fromProject.getResponseCondition)
      .subscribe(condition => {
        this.condition = condition
      })
  }

  ngOnInit () {
  }

  onSelectMenu (id) {
    this.menuSelector = id
  }

  saveHeader (data) {
    this.condition.headers = data.entities
    this.temps.headers = data.temp
    this.dispatch()
  }

  saveBody (data) {
    this.condition.body = data
    this.dispatch()
  }

  saveQueryString (data) {
    this.condition.queryString = data
    this.temps.queryString = data.temp
    this.dispatch()
  }

  dispatch () {
    this.store.dispatch(new responseAction.ConditionAction(this.condition))
  }
}
