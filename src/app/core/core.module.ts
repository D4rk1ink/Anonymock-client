import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { StoreModule } from '@ngrx/store'
import { coreReducers } from './reducers'

import { InterceptorService } from './services/interceptor.service'

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot(coreReducers),
  ],
  declarations: [],
  exports: [
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ]
})
export class CoreModule { }
