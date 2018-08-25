import { Component, OnInit, OnDestroy } from '@angular/core'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs/Rx'
import { LogService } from 'app/project/services/log.service'
import { NotificationService } from 'app/shared/services/notification.service'
import { ConfirmService } from 'app/shared/services/confirm.service'
import * as logsAction from 'app/project/actions/logs.action'
import * as fromProject from 'app/project/reducers'
import * as json from 'app/project/utils/json.util'

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit, OnDestroy {

  public projectId: string
  public isManager: boolean

  public isLoading: boolean
  public logs: any[]
  public searchLog: string
  public page: number
  public limitPage: number
  public logTarget: string

  public getProjectSub: Subscription
  public getLogsSub: Subscription

  constructor (
    private store: Store<any>,
    private logService: LogService,
    private notificationService: NotificationService,
    private confirmService: ConfirmService
  ) {
    this.getProjectSub = this.store.select(fromProject.getProject)
      .subscribe(res => {
        this.projectId = res.id
        this.isManager = res.isManager
      })
    this.getLogsSub = this.store.select(fromProject.getLogs)
      .subscribe(res => {
        this.isLoading = res.isLoading
        this.logs = res.items
        this.limitPage = res.limitPage
        const nqSearchEndpoints = this.searchLog !== res.search
        const nqPage = this.page !== res.page
        if (nqSearchEndpoints || nqPage) {
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

  onClear () {
    this.confirmService.open({
      message: 'Are you sure you want to clear logs'
    })
      .afterClose(val => {
        if (val) {
          this.logService.clear()
            .subscribe(res => {
              if (!res.error) {
                this.store.dispatch(new logsAction.ItemsAction(res.data.logs))
                this.store.dispatch(new logsAction.LimitPageAction(1))
                this.notificationService.notify({
                  type: 'success',
                  message: 'Clear logs successfully.'
                })
              } else {
                this.notificationService.notify({
                  type: 'error',
                  message: 'Clear logs Fail.'
                })
              }
            })
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

  ngOnDestroy () {
    if (this.getProjectSub) {
      this.getProjectSub.unsubscribe()
    }
    if (this.getLogsSub) {
      this.getLogsSub.unsubscribe()
    }
  }

}
