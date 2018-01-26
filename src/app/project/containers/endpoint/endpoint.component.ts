import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import * as endpointAction from '../../actions/endpoint.action'
import * as fromProject from '../../reducers'

@Component({
  selector: 'app-endpoint',
  templateUrl: './endpoint.component.html',
  styleUrls: ['./endpoint.component.scss']
})
export class EndpointComponent implements OnInit {

  public endpoint: any

  constructor (
    private store: Store<any>
  ) {
    // Call service get endpoint
    this.endpoint = {
      name: 'Check Promotion',
      path: '/check-promotion/{userId}',
      responses: [
        {
          id: 'Xu6ooc2seeG',
          name: 'When user id is 001',
          isDefault: false
        },
        {
          id: 'Zeeb3shiequ',
          name: 'When user id is 002',
          isDefault: true
        },
        {
          id: 'chisie1oHai',
          name: 'When user id is 003',
          isDefault: false
        }
      ]
    }
    this.store.dispatch(new endpointAction.NameAction(this.endpoint.name))
    this.store.dispatch(new endpointAction.PathAction(this.endpoint.path))
    this.store.dispatch(new endpointAction.ResponsesAction(this.endpoint.responses))
  }

  ngOnInit () {
  }

  onPathChange (path) {
    this.store.dispatch(new endpointAction.PathAction(path))
  }
}
