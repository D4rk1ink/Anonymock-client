import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import * as database from 'app/core/services/database.service'

@Injectable()
export class AuthGuardService {

  constructor(
    private router: Router
  ) { }

  canActivate(): boolean {
    if (!database.getToken()) {
      this.router.navigateByUrl('/auth/sign-in')
      return false
    }
    return true
  }

}
