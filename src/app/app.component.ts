import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import * as fromCore from 'app/core/reducers'
import * as database from 'app/core/services/database.service'
import 'brace/index'
import 'brace/theme/github'
import 'brace/theme/tomorrow'
import 'brace/theme/chrome'
import 'brace/mode/json'
import 'brace/worker/json'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor (
    private store: Store<any>
  ) {
    this.store.select(fromCore.getOtherTheme)
      .subscribe(theme => {
        database.saveTheme(theme)
        document.querySelector('body').className = theme
      })
  }
}
