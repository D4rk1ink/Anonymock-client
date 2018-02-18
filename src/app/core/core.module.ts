import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store'
import { coreReducers } from './reducers'

import { LocalStorageService } from './services/local-storage.service'

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(coreReducers),
  ],
  declarations: [],
  providers: [
    LocalStorageService
  ]
})
export class CoreModule { }
