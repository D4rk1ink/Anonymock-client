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

  public name: string
  public path: string

  constructor (
    private store: Store<any>
  ) {
    this.name = 'Check Promotion'
    this.path = '/check-promotion/{user-id}'
  }

  ngOnInit () {
    this.store.dispatch(new endpointAction.PathAction(this.path))
    this.store.select(fromProject.getEndpointPath).subscribe(a => console.log(a))
  }

  onPathChange (path) {
    this.store.dispatch(new endpointAction.PathAction(path))
  }
}
