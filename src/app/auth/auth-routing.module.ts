import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { AuthComponent } from './auth.component'
import { SignInComponent } from './containers/sign-in/sign-in.component'
import { SignUpComponent } from './containers/sign-up/sign-up.component'

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'sign-in',
        component: SignInComponent
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      },
      {
        path: '**',
        redirectTo: 'sign-in'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
