import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs/Rx'
import { NotificationService } from 'app/shared/services/notification.service'
import { EndpointService } from 'app/project/services/endpoint.service'
import { MethodService } from 'app/project/services/method.service'
import { FolderService } from 'app/project/services/folder.service'
import { slideAnimation } from 'app/shared/animations/slide.animation'
import * as endpointAction from 'app/project/actions/endpoint.action'
import * as foldersAction from 'app/project/actions/folders.action'
import * as methodsAction from 'app/project/actions/methods.action'
import * as fromProject from 'app/project/reducers'

@Component({
  selector: 'app-endpoint',
  templateUrl: './endpoint.component.html',
  styleUrls: ['./endpoint.component.scss'],
})
export class EndpointComponent implements OnInit, OnDestroy {

  public endpoint: any
  public responses: any[]

  public getEndpointSub: Subscription

  constructor (
    private store: Store<any>,
    private notificationService: NotificationService,
    private endpointService: EndpointService,
    private methodService: MethodService,
    private folderService: FolderService,
    private route: ActivatedRoute
  ) {
    this.getFolders()
    this.getMethods()
    this.getEndpointSub = this.store.select(fromProject.getEndpoint)
      .subscribe(endpoint => {
        this.endpoint = endpoint
      })
    this.route.params.subscribe(params => {
      const endpointId = params['endpoint-id']
      this.store.dispatch(new endpointAction.IdAction(endpointId))
      this.endpointService.getById(endpointId)
        .subscribe(res => {
          if (!res.error) {
            this.store.dispatch(new endpointAction.NameAction(res.data.name))
            this.store.dispatch(new endpointAction.PathAction(res.data.path))
            this.store.dispatch(new endpointAction.MethodAction(res.data.method))
            this.store.dispatch(new endpointAction.FolderAction(res.data.folder))
          }
        })
    })
    // Call service get endpoint
  }

  ngOnInit () {
  }

  getFolders () {
    this.folderService.search({ all: true })
      .subscribe(res => {
        if (!res.error) {
          this.store.dispatch(new foldersAction.ItemsAction(res.data.folders))
          this.store.dispatch(new foldersAction.IsLoadingAction(true))
        }
      })
  }

  getMethods () {
    this.methodService.search()
      .subscribe(res => {
        if (!res.error) {
          this.store.dispatch(new methodsAction.ItemsAction(res.data))
          this.store.dispatch(new methodsAction.IsLoadingAction(true))
        }
      })
  }

  ngOnDestroy () {
    this.store.dispatch(new endpointAction.ClearAction())
    if (this.getEndpointSub) {
      this.getEndpointSub.unsubscribe()
    }
  }
}
