import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserService } from 'app/my-account/services/user.service';
import * as otherAction from 'app/core/actions/other.action';
import * as userAction from 'app/core/actions/user.action';
import * as fromCore from 'app/core/reducers';

@Component({
  selector: 'profile-popup',
  templateUrl: './profile-popup.component.html',
  styleUrls: ['./profile-popup.component.scss']
})
export class ProfilePopupComponent implements OnInit {

  @ViewChild('pictureInput') pictureInput: ElementRef;

  public tempUser: any
  public user: any
  public wasInside: boolean
  public page: string
  public password: any

  public isOtherUser: boolean

  constructor(
    private store: Store<any>,
    private userService: UserService,
  ) {
    this.wasInside = true
    this.page = 'info'
    this.store.select(fromCore.getOtherIsOtherUserPopup)
      .subscribe(isOtherUser => {
        this.isOtherUser = isOtherUser
      })
    this.store.select(fromCore.getOtherOtherUserPopup)
      .subscribe(otherUser => {
        this.user = {...otherUser}
      })
    this.store.select(fromCore.getUser)
      .subscribe(user => {
        if (!this.isOtherUser) {
          this.tempUser = {...user}
          this.user = {...user}
        }
      })
  }

  @HostListener('click')
  clickInside() {
    this.wasInside = true;
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.wasInside) {
      this.store.dispatch(new otherAction.IsProfilePopupAction())
    }
    this.wasInside = false;
  }

  ngOnInit() {
  }

  onPage (page) {
    this.resetUser()
    this.resetPassword()
    this.page = page
  }

  resetUser () {
    this.user = {...this.tempUser}
  }

  resetPassword () {
    this.password = {
      old: '',
      new: '',
      newconfirm: '',
    }
  }

  onSubmit () {
    if (this.page === 'info') {
      this.updateProfile()
    } else if (this.page === 'password') {
      this.changePassword()
    }
  }

  selectPicture () {
    this.pictureInput.nativeElement.click()
  }

  uploadPicture (event) {
    const files = event.target.files
    if (files.length > 0) {
      const file = files[0]
      if (file.size/1000 <= 2000) {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          const payload = {
            picture: reader.result
          }
          this.userService.uploadPicture(this.user.id, payload)
            .subscribe(res => {
              if (!res.error) {
                this.store.dispatch(new userAction.PictureAction(`${this.user.picture}&random=${Math.random()}`))
              }
            })
        }
      }
    }
  }

  updateProfile () {
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

  changePassword () {

  }

}
