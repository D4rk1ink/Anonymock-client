import { Component, OnInit } from '@angular/core'
import { AuthService } from 'app/auth/services/auth.service'
import * as database from 'app/core/services/database.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../styles/style.scss']
})
export class SignUpComponent implements OnInit {

  public firstname: string
  public lastname: string
  public username: string
  public email: string
  public password: string
  public confirmPassword: string

  public isAlert: boolean
  public alertStatus: boolean
  public alertMessage: string

  constructor (
    private authService: AuthService
  ) {
    database.clearAll()
  }

  ngOnInit () {
  }

  onSubmit () {
    if (this.password == this.confirmPassword) {
      const payload = {
        firstname: this.firstname,
        lastname: this.lastname,
        username: this.username,
        email: this.email,
        password: this.password
      }
      this.authService.signup(payload)
        .subscribe(res => {
          if (!res.error) {
            this.isAlert = true
            this.alertStatus = true
          } else {
            this.isAlert = true
            this.alertStatus = false
          }
        })
    }
  }

}
