import { Component, OnInit, OnDestroy } from '@angular/core'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs/Rx'
import * as json from 'app/project/utils/json.util'
import * as schema from 'app/project/utils/verify-schema.util'
import * as databaseAction from 'app/project/actions/database.action'
import * as fromProject from 'app/project/reducers'

@Component({
  selector: 'db-schema',
  templateUrl: './db-schema.component.html',
  styleUrls: ['./db-schema.component.scss']
})
export class DbSchemaComponent implements OnInit, OnDestroy {

  public schema: string
  public invalid: any

  public getDatabaseSchemaSub: Subscription

  constructor(
    private store: Store<any>
  ) {
    this.invalid = {
      isError: false,
      message: ''
    }
    this.getDatabaseSchemaSub = this.store.select(fromProject.getDatabaseSchema)
      .subscribe(schema => {
        try {
          this.schema = json.pretty(schema).replace(/("[^"]+"\s?:\s?)["|'](String|Number|Boolean|Array|Object)["|']/g, `$1$2`)
        } catch (err) {
          this.schema = schema.replace(/("[^"]+"\s?:\s?)["|'](String|Number|Boolean|Array|Object)["|']/g, `$1$2`)
        }
      })
  }

  ngOnInit() {
  }

  onSchemaChange (text: string) {
    if (text === '') return
    try {
      text = text.replace(/("[^"]+"\s?:\s?)(String|Number|Boolean|Array|Object)/g, `$1"$2"`)
      this.store.dispatch(new databaseAction.SchemaAction(text))
      schema.isSchema(text)
      this.invalid.isError = false
      this.invalid.message = ''
    } catch (err) {
      this.invalid.isError = true
      this.invalid.message = err.message
    }
  }

  ngOnDestroy () {
    if (this.getDatabaseSchemaSub) {
      this.getDatabaseSchemaSub.unsubscribe()
    }
  }

}
