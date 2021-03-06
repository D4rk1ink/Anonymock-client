import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './shared/components/home/home.component'
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component'
import { AuthGuardService } from 'app/core/services/auth-guard.service'

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'member-management',
        loadChildren: './member-management/member-management.module#MemberManagementModule'
      },
      {
        path: 'project',
        loadChildren: './project/project.module#ProjectModule'
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
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
