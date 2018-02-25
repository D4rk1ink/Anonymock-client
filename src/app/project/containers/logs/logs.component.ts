import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { LogService } from 'app/project/services/log.service'
import * as fromProject from 'app/project/reducers'

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  public projectId: string

  public logs: any[]
  public searchLog: string
  public page: number
  public limitPage: number
  public logTarget: string

  constructor (
    private store: Store<any>,
    private logService: LogService
  ) {
    this.logs = []
    this.searchLog = ''
    this.page = 1
    this.store.select(fromProject.getProjectId)
      .subscribe(id => {
        if (!id) return
        this.projectId = id
        this.search()
      })
  }

  ngOnInit () {
  }

  onSearch (text) {
    this.searchLog = text
    this.search()
  }

  search () {
    const payload = {
      project: this.projectId,
      search: this.searchLog,
      page: this.page
    }
    this.logService.search(payload)
      .subscribe(res => {
        if (!res.error) {
          this.logs = res.data.logs
          this.limitPage = res.data.limitPage
        }
      })
  }

  onExpand (id) {
    this.logTarget = id
  }

  onPage (val) {
    const temp = this.page + val
    if (temp >= 1 || temp <= this.limitPage) {
      this.page = temp
      this.search()
    }
  }

}
