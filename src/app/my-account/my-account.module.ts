import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountComponent } from './my-account.component';
import { MyAccountRoutingModule } from './my-account-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MyAccountRoutingModule
  ],
  declarations: [
    MyAccountComponent
  ],
  exports: [
    MyAccountComponent
  ]
})
export class MyAccountModule { }
