import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { ResponseService } from 'app/project/services/response.service';
import { EndpointService } from 'app/project/services/endpoint.service';
import * as endpointAction from 'app/project/actions/endpoint.action'
import * as responseAction from 'app/project/actions/response.action'
import * as fromProject from 'app/project/reducers'

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.scss']
})
export class ResponsesComponent implements OnInit {

  public endpointId: string
  public endpoint: any
  public responses: any[]
  public environment: string
  
  constructor(
    private store: Store<any>,
    private responseService: ResponseService,
    private endpointService: EndpointService
  ) {
    this.environment = 'dev'
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

  onNew () {
    const payload = {
      endpoint: this.endpointId,
      environment: this.environment
    }
    this.responseService.create(payload)
      .subscribe(res => {
        if (!res.error) {
          this.responses = [res.data, ...this.responses]
        }
      })
  }

  onChangeEnvironment (environment) {
    this.environment = environment
    this.search()
  }

  search () {
    const payload = {
      endpoint: this.endpointId,
      search: '',
      environment: this.environment
    }
    this.responseService.search(payload)
      .subscribe(res => {
        if (!res.error) {
          this.responses = res.data
        }
      })
  }

  onSubmit () {
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

}
