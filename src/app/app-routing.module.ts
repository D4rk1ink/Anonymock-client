import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {
    path: 'member-management',
    loadChildren: './member-management/member-management.module#MemberManagementModule'
  },
  {
    path: ':project-id',
    loadChildren: './project/project.module#ProjectModule'
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
