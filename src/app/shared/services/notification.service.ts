import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class NotificationService {

  public observable: Observable<any>
  public observer: any

  constructor() {
    this.observable = new Observable((observer) => {
      this.observer = observer
    })
  }

  notify (data: { type: 'success' | 'error', message: string }) {
    this.observer.next(data)
  }

  subscribe (cb) {
    return this.observable.subscribe(cb)
  }

}
