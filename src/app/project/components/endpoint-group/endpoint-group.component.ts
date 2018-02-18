import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { EndpointService } from 'app/project/services/endpoint.service'
import * as coreDatabase from 'app/core/services/database.service'
import * as endpointsAction from 'app/project/actions/endpoints.action'
import * as fromProject from 'app/project/reducers'

@Component({
  selector: 'endpoint-group',
  templateUrl: './endpoint-group.component.html',
  styleUrls: ['./endpoint-group.component.scss']
})
export class EndpointGroupComponent implements OnInit {

  @Input('folderId') folderId: string

  public endpoints: any[]
  public page: number

  constructor (
    private store: Store<any>,
    private endpointService: EndpointService,
    private router: Router
  ) {
    this.page = 1
    this.setPage()
    this.store.select(fromProject.getEndpointsItems)
      .subscribe(endpoints => {
        this.endpoints = endpoints
      })
  }

  ngOnInit () {
  }

  onLink (id) {
    this.router.navigateByUrl(`/project/${coreDatabase.getProject()}/endpoint/${id}`)
  }

  onNew () {
    this.endpointService.create({ folder: this.folderId })
      .subscribe(res => {
        if (this.endpoints.length >= 10) {
          this.endpoints = this.endpoints.slice(0, this.endpoints.length - 1)
        }
        this.endpoints = [res.data, ...this.endpoints]
      })
  }

  onPage (val) {

  }

  setPage () {
    this.store.dispatch(new endpointsAction.PageAction(this.page))
  }

}
