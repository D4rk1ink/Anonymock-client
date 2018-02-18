import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as database from 'app/core/services/database.service'
import * as userAction from 'app/core/actions/user.action'
import 'brace/index';
import 'brace/theme/github';
import 'brace/theme/tomorrow';
import 'brace/theme/chrome';
import 'brace/mode/json';
import 'brace/worker/json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor (
    private store: Store<any>
  ) {
    const user = database.getUser()
    this.store.dispatch(new userAction.UserAction(user))
  }
}
