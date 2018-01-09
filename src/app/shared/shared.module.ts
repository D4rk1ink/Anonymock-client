import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { LeftMenuComponent } from './components/left-menu/left-menu.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LeftMenuComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    LeftMenuComponent
  ]
})
export class SharedModule { }
