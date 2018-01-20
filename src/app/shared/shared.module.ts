import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AceEditorModule } from 'ng2-ace-editor'
import { LeftMenuComponent } from './components/left-menu/left-menu.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AceEditorModule
  ],
  declarations: [
    LeftMenuComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AceEditorModule,

    LeftMenuComponent
  ]
})
export class SharedModule { }
