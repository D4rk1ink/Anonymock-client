import { Component, OnInit, OnDestroy, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs/Rx'
import { DatabaseService } from 'app/project/services/database.service'
import * as schema from 'app/project/utils/verify-schema.util'
import * as databaseAction from 'app/project/actions/database.action'
import * as fromProject from 'app/project/reducers'

@Component({
  selector: 'db-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit, OnDestroy {

  @ViewChild('jsonImport') jsonImport: ElementRef

  @Output('submit') submit: EventEmitter<any>
  public data: string
  public schema: string
  public invalid: any
  public row: number

  public getDatabaseSub: Subscription

  constructor (
    private store: Store<any>,
    private databaseService: DatabaseService
  ) {
    this.submit = new EventEmitter<any>()
    this.row = 0
    this.invalid = {
      isError: false,
      message: ''
    }
    this.getDatabaseSub = this.store.select(fromProject.getDatabase)
      .subscribe(db => {
        this.data = db.custom
        this.schema = db.schema
        this.setRow(this.data)
        try {
          schema.isSchema(this.schema)
          const group = JSON.parse(this.data)
          if (Array.isArray(group)) {
            for (const data of group) {
              schema.verify(data, this.schema)
            }
            this.setRow(group)
            this.invalid.isError = false
            this.invalid.message = ''
          } else {
            throw new Error ('Not array')
          }
        } catch (err) {
          this.invalid.isError = true
          this.invalid.message = err.message
        }
      })
  }

  ngOnInit () {
  }

  onDataChange (data) {
    this.store.dispatch(new databaseAction.CustomAction(data))
  }

  import (event) {
    const files = event.target.files
    if (files.length > 0) {
      const file = files[0]
      const reader = new FileReader()
      reader.readAsText(file)
      reader.onload = () => {
        reader.result
        this.store.dispatch(new databaseAction.CustomAction(reader.result))
      }
    }
  }

  onImport () {
    this.jsonImport.nativeElement.click()
  }

  onSubmit () {
    if (!this.invalid.isError) {
      const payload = {
        schema: JSON.parse(this.schema),
        data: JSON.parse(this.data)
      }
      this.submit.emit(payload)
    }
  }

  setRow (data) {
    try {
      data = JSON.parse(data)
      if (Array.isArray(data)) {
        return this.row = data.length
      }
    } catch (err) { }
    return this.row = 0
  }

  ngOnDestroy () {
    if (this.getDatabaseSub) {
      this.getDatabaseSub.unsubscribe()
    }
  }
}
