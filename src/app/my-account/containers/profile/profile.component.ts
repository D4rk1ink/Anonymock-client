import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/my-account/services/user.service';
import * as database from 'app/core/services/database.service'

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public user: any

  constructor(
    private userService: UserService
  ) {
    const user = database.getUser()
    this.userService.getById(user.id)
      .subscribe(user => {
        this.user = user
      })
  }

  ngOnInit() {
  }

}
