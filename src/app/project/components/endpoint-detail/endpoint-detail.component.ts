import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs/Rx'
import * as endpointAction from 'app/project/actions/endpoint.action'
import * as fromProject from 'app/project/reducers'

@Component({
  selector: 'endpoint-detail',
  templateUrl: './endpoint-detail.component.html',
  styleUrls: ['./endpoint-detail.component.scss']
})
export class EndpointDetailComponent implements OnInit {

  public endpoint: any

  public methods$: Observable<any>
  public folders$: Observable<any>

  public getEndpointSub: Subscription

  constructor(
    private store: Store<any>
  ) {
    this.methods$ = this.store.select(fromProject.getMethods)
    this.folders$ = this.store.select(fromProject.getFolders)
    this.getEndpointSub = this.store.select(fromProject.getEndpoint)
      .subscribe(endpoint => {
        this.endpoint = endpoint
      })
  }

  ngOnInit() {
  }

  onNameChange (name) {
    this.store.dispatch(new endpointAction.NameAction(name))
  }

  onPathChange (path) {
    this.store.dispatch(new endpointAction.PathAction(path))
  }

  onMethodChange (method) {
    this.store.dispatch(new endpointAction.MethodAction({ id: method }))
  }

  onFolderChange (folder) {
    this.store.dispatch(new endpointAction.FolderAction({ id: folder }))
  }

  ngOnDestroy () {
    if (this.getEndpointSub) {
      this.getEndpointSub.unsubscribe()
    }
  }

}
