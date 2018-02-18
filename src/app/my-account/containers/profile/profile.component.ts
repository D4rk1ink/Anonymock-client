import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/my-account/services/user.service';
import { Store } from '@ngrx/store';
import * as database from 'app/core/services/database.service'
import * as userAction from 'app/core/actions/user.action'

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public user: any

  constructor(
    private store: Store<any>,
    private userService: UserService
  ) {
    this.user = database.getUser()
    this.userService.getById(this.user.id)
      .subscribe(res => {
        if (!res.error) {
          this.user = res.data
        }
      })
  }

  ngOnInit() {
  }

  onSubmit () {
    const payload = {
      firstname: this.user.firstname,
      lastname: this.user.lastname,
      email: this.user.email,
    }
    this.userService.update(this.user.id, payload)
      .subscribe(res => {
        if (!res.error) {
          this.store.dispatch(new userAction.FirstnameAction(res.data.firstname))
          this.store.dispatch(new userAction.LastnameAction(res.data.lastname))
          this.store.dispatch(new userAction.EmailAction(res.data.email))
        } else {
        }
      })
  }
}
