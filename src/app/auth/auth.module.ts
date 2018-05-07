import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AuthComponent } from './auth.component'
import { SignInComponent } from './containers/sign-in/sign-in.component'
import { SignUpComponent } from './containers/sign-up/sign-up.component'
import { AuthRoutingModule } from './auth-routing.module'
import { SharedModule } from '../shared/shared.module'

import { AuthService } from 'app/auth/services/auth.service'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule
  ],
  declarations: [
    AuthComponent,
    SignInComponent,
    SignUpComponent
  ],
  providers: [
    AuthService
  ],
  exports: [
    AuthComponent,
    SignInComponent,
    SignUpComponent
  ]
})
export class AuthModule { }
