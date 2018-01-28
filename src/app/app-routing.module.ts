import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component'

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'my-account',
        loadChildren: './my-account/my-account.module#MyAccountModule'
      },
      {
        path: 'member-management',
        loadChildren: './member-management/member-management.module#MemberManagementModule'
      },
      {
        path: ':project-id',
        loadChildren: './project/project.module#ProjectModule'
      },
      {
        path: '**',
        redirectTo: 'my-account'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
