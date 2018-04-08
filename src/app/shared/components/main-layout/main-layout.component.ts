import { Component, OnInit } from '@angular/core'
import { UserService } from 'app/my-account/services/user.service'
import { Store } from '@ngrx/store'
import * as userAction from 'app/core/actions/user.action'
import * as otherAction from 'app/core/actions/other.action'
import * as database from 'app/core/services/database.service'
import * as fromCore from 'app/core/reducers'
import * as constants from 'app/shared/constants'

@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  public user: any
  public isProfileDropdown: boolean
  public isProfilePopup: boolean

  constructor (
    private store: Store<any>,
    private userService: UserService
  ) {
    this.store.select(fromCore.getUser)
      .subscribe(user => {
        this.user = user
      })
    this.store.select(fromCore.getOther)
      .subscribe(other => {
        this.isProfileDropdown = other.isProfileDropdown
        this.isProfilePopup = other.isProfilePopup
      })
    this.userService.getById(database.getUser().id)
      .subscribe(res => {
        if (!res.error) {
          const user = {
            id: res.data.id,
            firstname: res.data.firstname,
            lastname: res.data.lastname,
            email: res.data.email,
            isAdmin: res.data.isAdmin,
            picture: `${constants.BASE_API}/user/${res.data.id}/picture?authorization=${database.getToken()}`
          }
          database.saveUser(user)
          this.store.dispatch(new userAction.UserAction(user))
        }
      })
  }

  ngOnInit () {
  }

  profileDropdown () {
    this.store.dispatch(new otherAction.IsProfileDropdownAction())
  }

}
