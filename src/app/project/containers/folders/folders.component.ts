import { Component, OnInit, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { Store } from '@ngrx/store'
import { FolderService } from 'app/project/services/folder.service'
import * as fromProject from 'app/project/reducers'

import { projects } from 'app/mock/projects'

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.scss']
})
export class FoldersComponent implements OnInit {

  public projectId: string

  public isLoading: boolean
  public folders: any[]
  public searchFolder: string
  public page: number
  public limitPage: number
  public isNewFolder: boolean
  public isRename: string

  public searchSub: Subscription

  constructor (
    private store: Store<any>,
    private folderService: FolderService,
    private el: ElementRef
  ) {
    this.isLoading = true
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
    if (this.isNewFolder) {
      const autofocus = this.el.nativeElement.querySelector('.input-name')
      if (autofocus) {
        autofocus.value = ''
        setTimeout(() => autofocus.focus(), 0)
      }
    }
  }

  onRename (folder) {
    this.isRename = folder.id
    if (this.isRename) {
      const autofocus = this.el.nativeElement.querySelector(`.input-rename-${folder.id}`)
      if (autofocus) {
        autofocus.value = folder.name
        setTimeout(() => autofocus.focus(), 0)
      }
    }
  }

  onNewBlur () {
    this.isNewFolder = false
  }

  onRenameBlur () {
    this.isRename = null
  }
  
  onSearch (text) {
    this.searchFolder = text
    this.search()
  }

  onSubmitNewFolder (values) {
    const payload = {
      project: this.projectId,
      name: values.name
    }
    this.folderService.create(payload)
      .subscribe(res => {
        if (!res.error) {
          this.folders = [res.data, ...this.folders]
        }
        this.onNewBlur()
      })
  }

  onSubmitRename (id, values) {
    const payload = {
      name: values.rename
    }
    this.folderService.update(id, payload)
      .subscribe(res => {
        if (!res.error) {
          this.folders = this.folders.map(folder => {
            if (folder.id === res.data.id) {
              folder.name = res.data.name
            }
            return folder
          })
        }
        this.onRenameBlur()
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
    this.isLoading = true
    this.searchSub = this.folderService.search(payload)
      .subscribe(res => {
        if (!res.error) {
          this.folders = res.data.folders
          this.limitPage = res.data.limitPage
          this.isLoading = false
        }
      })
  }

}
