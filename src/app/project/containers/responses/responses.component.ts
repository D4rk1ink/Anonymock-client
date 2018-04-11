import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { ResponseService } from 'app/project/services/response.service'
import { EndpointService } from 'app/project/services/endpoint.service'
import * as database from 'app/core/services/database.service'
import * as fromProject from 'app/project/reducers'

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.scss']
})
export class ResponsesComponent implements OnInit {

  public isLoading: boolean
  public endpointId: string
  public endpoint: any
  public responses: any[]
  public tabSelector: any
  public tabAll: any[] = [
    { id: 'M01', title: 'Dev' },
    { id: 'M02', title: 'Test' }
  ]

  constructor(
    private store: Store<any>,
    private router: Router,
    private responseService: ResponseService,
    private endpointService: EndpointService
  ) {
    this.tabSelector = this.tabAll[0]
    this.store.select(fromProject.getEndpointId)
      .subscribe(endpointId => {
        this.endpointId = endpointId
        this.search()
      })
    this.store.select(fromProject.getEndpoint)
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
          console.log(res.data)
        }
      })
  }

  deleteResponse (id) {
    this.responseService.delete(id)
      .subscribe(res => {
        if (!res.error) {
          this.responses = this.responses.filter(response => response.id !== id)
        }
      })
  }

  deleteEndpoint () {  
    this.endpointService.delete(this.endpointId)
      .subscribe(res => {
        if (!res.error) {
          this.router.navigateByUrl(`/project/${database.getProject()}/folder/${this.endpoint.folder.id}`)
        }
      })
  }

}
