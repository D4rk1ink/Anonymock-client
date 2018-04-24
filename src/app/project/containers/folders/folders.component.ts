import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core'
import { Subscription } from 'rxjs/Rx'
import { Store } from '@ngrx/store'
import { NotificationService } from 'app/shared/services/notification.service'
import { FolderService } from 'app/project/services/folder.service'
import * as fromProject from 'app/project/reducers'

import { projects } from 'app/mock/projects'

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.scss']
})
export class FoldersComponent implements OnInit, OnDestroy {

  public projectId: string

  public isLoading: boolean
  public folders: any[]
  public searchFolder: string
  public page: number
  public limitPage: number
  public isNewFolder: boolean
  public isRename: string

  public projectIdSub: Subscription
  public searchSub: Subscription
  public createSub: Subscription
  public renameSub: Subscription

  constructor (
    private store: Store<any>,
    private notificationService: NotificationService,
    private folderService: FolderService,
    private el: ElementRef
  ) {
    this.isLoading = true
    this.folders = []
    this.searchFolder = ''
    this.page = 1
    this.projectIdSub = this.store.select(fromProject.getProjectId)
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

  submitNewFolder (values) {
    const payload = {
      project: this.projectId,
      name: values.name
    }
    this.createSub = this.folderService.create(payload)
      .subscribe(res => {
        if (!res.error) {
          this.folders = [res.data, ...this.folders]
        }
        this.onNewBlur()
        this.notificationService.notify({
          type: 'success',
          message: 'Create folder successfully'
        })
      })
  }

  submitRename (id, values) {
    const payload = {
      name: values.rename
    }
    this.renameSub = this.folderService.update(id, payload)
      .subscribe(res => {
        if (!res.error) {
          this.folders = this.folders.map(folder => {
            if (folder.id === res.data.id) {
              folder.name = res.data.name
            }
            return folder
          })
          this.notificationService.notify({
            type: 'success',
            message: 'Change folder name successfully'
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

  ngOnDestroy () {
    if (this.projectIdSub) {
      this.projectIdSub.unsubscribe()
    }
    if (this.createSub) {
      this.createSub.unsubscribe()
    }
    if (this.renameSub) {
      this.renameSub.unsubscribe()
    }
    if (this.searchSub) {
      this.searchSub.unsubscribe()
    }
  }

}
