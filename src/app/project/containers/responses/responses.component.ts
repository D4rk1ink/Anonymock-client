import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import * as endpointAction from '../../actions/endpoint.action'
import * as responseAction from '../../actions/response.action'
import * as fromProject from '../../reducers'

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.scss']
})
export class ResponsesComponent implements OnInit {

  public responses: any[]

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.store.select(fromProject.getEndpointResponses)
      .subscribe(responses => {
        this.responses = responses
      })
  }

}
