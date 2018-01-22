import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component'
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule
  ],
  declarations: [
    AuthComponent
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }
