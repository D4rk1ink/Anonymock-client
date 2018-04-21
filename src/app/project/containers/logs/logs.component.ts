import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { LogService } from 'app/project/services/log.service'
import * as logsAction from 'app/project/actions/logs.action'
import * as fromProject from 'app/project/reducers'
import * as json from 'app/project/utils/json.util'

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  public projectId: string

  public isLoading: boolean
  public logs: any[]
  public searchLog: string
  public page: number
  public limitPage: number
  public logTarget: string

  constructor (
    private store: Store<any>,
    private logService: LogService
  ) {
    this.store.select(fromProject.getProjectId)
      .subscribe(id => {
        if (!id) return
        this.projectId = id
      })
    this.store.select(fromProject.getLogs)
      .subscribe(res => {
        this.isLoading = res.isLoading
        this.logs = res.items
        this.limitPage = res.limitPage
        this.page = res.page
        const nqSearchEndpoints = this.searchLog !== res.search
        const nqPage = this.page !== res.page
        if (this.projectId && nqSearchEndpoints || nqPage) {
          this.searchLog = res.search
          this.page = res.page
          this.search()
        }
      })
  }

  ngOnInit () {
  }

  onSearch (search) {
    this.store.dispatch(new logsAction.SearchAction(search))
  }

  search () {
    const payload = {
      project: this.projectId,
      search: this.searchLog,
      page: this.page
    }
    this.store.dispatch(new logsAction.IsLoadingAction(true))
    this.logService.search(payload)
      .subscribe(res => {
        if (!res.error) {
          res.data.logs = res.data.logs.map(log => {
            return {
              ...log,
              request: {
                ...log.request,
                headers: json.toArray(log.request.headers),
                queryString: json.toArray(log.request.queryString)
              },
              response: {
                ...log.response,
                headers: json.toArray(log.response.headers),
              }
            }
          })
          this.store.dispatch(new logsAction.ItemsAction(res.data.logs))
          this.store.dispatch(new logsAction.LimitPageAction(res.data.limitPage))
          this.store.dispatch(new logsAction.IsLoadingAction(false))
        }
      })
  }

  onExpand (id) {
    this.logTarget = id
  }

  onPage (val) {
    const page = this.page + val
    if (page >= 1 || page <= this.limitPage) {
      this.store.dispatch(new logsAction.PageAction(page))
    }
  }

}
