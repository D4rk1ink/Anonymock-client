import { Component, OnInit, Input, HostListener } from '@angular/core'
import { Store } from '@ngrx/store'
import * as otherAction from 'app/core/actions/other.action'
import * as fromCore from 'app/core/reducers'

@Component({
  selector: 'profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.scss']
})
export class ProfileDropdownComponent implements OnInit {

  public user: any
  public wasInside: boolean

  public themes: any[] = [
    "",
    "sweet",
    "ocean",
    "sky",
    "orange",
    "purple",
    "yellow"
  ]

  constructor(
    private store: Store<any>
  ) {
    this.wasInside = true
    this.store.select(fromCore.getUser)
      .subscribe(user => {
        this.user = user
      })
  }

  @HostListener('click')
  clickInside() {
    this.wasInside = true
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.wasInside) {
      this.store.dispatch(new otherAction.IsProfileDropdownAction())
    }
    this.wasInside = false
  }

  ngOnInit() {
  }

  onProfile () {
    this.store.dispatch(new otherAction.IsOtherUserPopupAction(false))
    this.store.dispatch(new otherAction.IsProfileDropdownAction())
    this.store.dispatch(new otherAction.IsProfilePopupAction())
  }

  onTheme (theme) {
    this.store.dispatch(new otherAction.ThemeAction(theme))
  }

}
