import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs/Rx'
import { NotificationService } from 'app/shared/services/notification.service'
import { ResponseService } from 'app/project/services/response.service'
import { EndpointService } from 'app/project/services/endpoint.service'
import { ConfirmService } from 'app/shared/services/confirm.service'
import * as database from 'app/core/services/database.service'
import * as fromProject from 'app/project/reducers'

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.scss']
})
export class ResponsesComponent implements OnInit, OnDestroy {

  public isLoading: boolean
  public endpointId: string
  public endpoint: any
  public responses: any[]
  public tabSelector: any
  public tabAll: any[] = [
    { id: 'M01', title: 'Dev' },
    { id: 'M02', title: 'Test' }
  ]

  public getEndpointIdSub: Subscription
  public getEndpointSub: Subscription

  constructor(
    private store: Store<any>,
    private router: Router,
    private notificationService: NotificationService,
    private responseService: ResponseService,
    private endpointService: EndpointService,
    private confirmService: ConfirmService
  ) {
    this.tabSelector = this.tabAll[0]
    this.getEndpointIdSub = this.store.select(fromProject.getEndpointId)
      .subscribe(endpointId => {
        this.endpointId = endpointId
        this.search()
      })
    this.getEndpointSub = this.store.select(fromProject.getEndpoint)
      .subscribe(endpoint => {
        this.endpoint = endpoint
      })
  }

  ngOnInit() {
  }

  onSelectMenu (tab) {
    this.tabSelector = tab
    this.search()
  }

  onNew () {
    const payload = {
      endpoint: this.endpointId,
      environment: this.tabSelector.title.toLowerCase()
    }
    this.responseService.create(payload)
      .subscribe(res => {
        if (!res.error) {
          res.data.isNew = true
          this.responses = [res.data, ...this.responses]
        }
      })
  }

  setDefault (response) {
    this.responseService.default(response.id)
      .subscribe(res => {
        if (!res.error) {
          this.responses = this.responses.map(response => {
            if (res.data.id === response.id) {
              response.isDefault = res.data.isDefault
            } else {
              response.isDefault = false
            }
            return response
          })
        }
      })
  }

  search () {
    const payload = {
      endpoint: this.endpointId,
      search: '',
      environment: this.tabSelector.title.toLowerCase()
    }
    this.isLoading = true
    this.responseService.search(payload)
      .subscribe(res => {
        if (!res.error) {
          this.responses = res.data
          this.isLoading = false
        }
      })
  }

  saveEndpoint () {
    const payload = {
      name: this.endpoint.name,
      path: this.endpoint.path,
      method: this.endpoint.method.id,
      folder: this.endpoint.folder.id,
    }
    this.endpointService.update(this.endpointId, payload)
      .subscribe(res => {
        if (!res.error) {
          this.notificationService.notify({
            type: 'success',
            message: 'Update endpoint successfully.'
          })
        } else {
          this.notificationService.notify({
            type: 'error',
            message: 'Update response has errors.'
          })
        }
      })
  }

  deleteResponse (id) {
    this.confirmService.open({
      message: 'Are you sure you want to delete this endpoint'
    })
      .afterClose(val => {
        if (val) {
          this.responseService.delete(id)
            .subscribe(res => {
              if (!res.error) {
                this.responses = this.responses.filter(response => response.id !== id)
                this.notificationService.notify({
                  type: 'success',
                  message: 'Delete response successfully.'
                })
              } else {
                this.notificationService.notify({
                  type: 'error',
                  message: 'Delete response has errors.'
                })
              }
            })
        }
      })
    
  }

  deleteEndpoint () {  
    this.confirmService.open({
      message: 'Are you sure you want to delete this endpoint'
    })
      .afterClose(val => {
        if (val) {
          this.endpointService.delete(this.endpointId)
            .subscribe(res => {
              if (!res.error) {
                this.router.navigateByUrl(`/project/${database.getProject()}/folder/${this.endpoint.folder.id}`)
                this.notificationService.notify({
                  type: 'success',
                  message: 'Delete endpoint successfully.'
                })
              } else {
                this.notificationService.notify({
                  type: 'error',
                  message: 'Delete endpoint has errors.'
                })
              }
            })
        }
      })
  }

  ngOnDestroy () {
    if (this.getEndpointIdSub) {
      this.getEndpointIdSub.unsubscribe()
    }
    if (this.getEndpointSub) {
      this.getEndpointSub.unsubscribe()
    }
  }

}
