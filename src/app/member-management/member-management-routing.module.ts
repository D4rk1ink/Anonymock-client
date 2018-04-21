import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MemberManagementComponent } from './member-management.component'
import { ManagementComponent } from './containers/management/management.component'

const routes: Routes = [
  {
    path: '',
    component: MemberManagementComponent,
    children: [
      {
        path: '',
        component: ManagementComponent
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
export class MemberManagementRoutingModule { }
