import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { Store } from '@ngrx/store'
import { FolderService } from 'app/project/services/folder.service'
import * as projectAction from 'app/project/actions/project.action'
import * as fromProject from 'app/project/reducers'

import { projects } from 'app/mock/projects'

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.scss']
})
export class FoldersComponent implements OnInit {

  public projectId: string

  public folders: any[]
  public searchFolder: string
  public page: number
  public limitPage: number
  public isNewFolder: boolean

  public searchSub: Subscription

  constructor (
    private store: Store<any>,
    private folderService: FolderService
  ) {
    this.folders = []
    this.searchFolder = ''
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

  onNew () {
    this.isNewFolder = true
  }
  
  onSearch (text) {
    this.searchFolder = text
    this.search()
  }

  onSubmitNewFolder (values) {
    this.isNewFolder = false
    const payload = {
      project: this.projectId,
      name: values.name
    }
    this.folderService.create(payload)
      .subscribe(res => {
        if (!res.error) {
          this.folders = [res.data, ...this.folders]
        }
      })
  }

  search () {
    if (this.searchSub) {
      this.searchSub.unsubscribe()
    }
    const payload = {
      project: this.projectId,
      search: this.searchFolder,
      page: this.page
    }
    this.searchSub = this.folderService.search(payload)
      .subscribe(res => {
        if (!res.error) {
          this.folders = res.data.folders
          this.limitPage = res.data.limitPage
        }
      })
  }

}
