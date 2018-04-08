import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MyAccountComponent } from './my-account.component'
import { ProfileComponent } from './containers/profile/profile.component'
import { ChangePasswordComponent } from './containers/change-password/change-password.component'

const routes: Routes = [
  {
    path: '',
    component: MyAccountComponent,
    children: [
      {
        path: '',
        component: ProfileComponent
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent
      },
      {
        path: '**',
        redirectTo: ''
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
export class MyAccountRoutingModule { }
