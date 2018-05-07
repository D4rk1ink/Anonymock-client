import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { UserService } from 'app/my-account/services/user.service'
import { NotificationService } from 'app/shared/services/notification.service'
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
  public notification: any[] = []

  constructor (
    private store: Store<any>,
    private notificationService: NotificationService,
    private userService: UserService
  ) {
    this.store.dispatch(new otherAction.ClearAction())
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
    this.notificationService.subscribe((notify) => {
      this.notification.push({ ...notify, id: Math.random().toString(36).substr(2, 9)})
    })
  }

  ngOnInit () {
  }

  profileDropdown () {
    this.store.dispatch(new otherAction.IsProfileDropdownAction())
  }

  destroyNotification (id) {
    this.notification = this.notification.filter(notify => notify.id !== id)
  }

}
