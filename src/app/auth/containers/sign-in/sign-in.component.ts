import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from 'app/auth/services/auth.service'
import * as database from 'app/core/services/database.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public username: string
  public password: string

  constructor (
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit () {
  }

  onSubmit () {
    const payload = {
      username: this.username,
      password: this.password
    }
    this.authService.signin(payload)
      .subscribe(res => {
        if (!res.error) {
          database.saveToken(res.data.token)
          database.saveUser(res.data.user)
          this.router.navigateByUrl('/my-account')
        }
      })
  }

}
