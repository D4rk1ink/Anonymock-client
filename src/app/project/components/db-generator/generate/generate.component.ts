import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { Store } from '@ngrx/store'
import * as schema from 'app/project/utils/verify-schema.util'
import * as databaseAction from 'app/project/actions/database.action'
import * as fromProject from 'app/project/reducers'

@Component({
  selector: 'db-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss']
})
export class GenerateComponent implements OnInit {

  @Output('submit') submit: EventEmitter<any>
  public model: string
  public count: number
  public schema: string
  public invalid: any

  constructor (
    private store: Store<any>
  ) {
    this.submit = new EventEmitter<any>()
    this.count = 0
    this.invalid = {
      isError: false,
      message: ''
    }
    this.store.select(fromProject.getDatabase)
      .subscribe(db => {
        this.model = db.generate
        this.schema = db.schema
        try {
          schema.isSchema(this.schema)
          schema.verify(this.model, this.schema)
          this.invalid.isError = false
          this.invalid.message = ''
        } catch (err) {
          this.invalid.isError = true
          this.invalid.message = err.message
        }
      })
  }

  ngOnInit () {
  }

  onSubmit () {
    if (!this.invalid.isError) {
      const payload = {
        schema: JSON.parse(this.schema),
        data: JSON.parse(this.model),
        count: this.count
      }
      this.submit.emit(payload)
    }
  }

  onDataChange (text) {
    this.store.dispatch(new databaseAction.GenerateAction(text))
  }

  onCountKeyPress (event) {
    if (!Number.isInteger(+event.key)) {
      event.preventDefault()
    }
  }

}
