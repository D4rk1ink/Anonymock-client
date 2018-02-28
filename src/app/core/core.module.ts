import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { StoreModule } from '@ngrx/store'
import { coreReducers } from './reducers'

import { InterceptorService } from './services/interceptor.service'
import { AuthGuardService } from './services/auth-guard.service'

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot(coreReducers),
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AuthGuardService,
        InterceptorService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: InterceptorService,
          multi: true
        }
      ]
    }
  }
}
