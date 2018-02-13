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
  public page: number
  public isNewFolder: boolean

  public searchSub: Subscription

  constructor (
    private store: Store<any>,
    private folderService: FolderService
  ) {
    this.folders = []
    this.page = 1
    this.store.select(fromProject.getProjectId)
      .subscribe(id => {
        if (!id) return
        this.projectId = id
        const payload = {
          project: id,
          search: '',
          page: this.page
        }
        this.folderService.search(payload)
          .subscribe(res => {
            if (!res.error) {
              this.folders = res.data
            }
          })
      })
  }

  ngOnInit () {
  }

  onNew () {
    this.isNewFolder = true
  }
  
  onSearch (text) {
    if (this.searchSub) {
      this.searchSub.unsubscribe()
    }
    const payload = {
      project: this.projectId,
      search: text,
      page: this.page
    }
    this.searchSub = this.folderService.search(payload)
      .subscribe(res => {
        if (!res.error) {
          this.folders = res.data
        }
      })

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

}
