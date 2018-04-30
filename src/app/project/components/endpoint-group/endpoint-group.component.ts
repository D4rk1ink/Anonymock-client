import { Component, OnInit, Input } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { EndpointService } from 'app/project/services/endpoint.service'
import * as database from 'app/core/services/database.service'
import * as endpointsAction from 'app/project/actions/endpoints.action'
import * as fromProject from 'app/project/reducers'

@Component({
  selector: 'endpoint-group',
  templateUrl: './endpoint-group.component.html',
  styleUrls: ['./endpoint-group.component.scss']
})
export class EndpointGroupComponent implements OnInit {

  @Input('folderId') folderId: string
  @Input('canNew') canNew: boolean

  public isLoading: boolean
  public endpoints: any[]
  public page: number
  public limitPage: number

  constructor (
    private store: Store<any>,
    private endpointService: EndpointService,
    private router: Router
  ) {
    this.page = 1
    this.setPage()
    this.store.select(fromProject.getEndpoints)
      .subscribe(endpoints => {
        this.isLoading = endpoints.isLoading
        this.endpoints = endpoints.items
        this.limitPage = endpoints.limitPage
      })
  }

  ngOnInit () {
  }

  onLink (id) {
    this.router.navigateByUrl(`/project/${database.getProject()}/endpoint/${id}`)
  }

  onNew () {
    this.endpointService.create({ folder: this.folderId })
      .subscribe(res => {
        res.data.isNew = true
        if (this.page > 1) {
          this.page = 1
          this.setPage()
        } else {
          if (this.endpoints.length >= 10) {
            this.endpoints = this.endpoints.slice(0, this.endpoints.length - 1)
            this.store.dispatch(new endpointsAction.LimitPageAction(this.limitPage + 1))
          }
          this.endpoints = [res.data, ...this.endpoints]
          this.store.dispatch(new endpointsAction.ItemsAction(this.endpoints))
        }
      })
  }

  onSearch (text) {
    this.store.dispatch(new endpointsAction.SearchAction(text))
  }

  onPage (val) {
    const temp = this.page + val
    if (temp >= 1 || temp <= this.limitPage) {
      this.page = temp
      this.setPage()
    }
  }

  setPage () {
    this.store.dispatch(new endpointsAction.PageAction(this.page))
  }

  copyPath (path) {
    return `${location.host}/api/e/${database.getProject()}/dev${path}`
  }

  shareEndpoint (id) {
    return `${location.host}/project/${database.getProject()}/endpoint/${id}`
  }

}
