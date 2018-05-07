import { Injectable } from '@angular/core'

@Injectable()
export class ConfirmService {

  public mainCallback: Function
  public callerCallback: Function
  constructor() { }

  connent (cb) {
    this.mainCallback = cb
  }

  open (data: { message: string }) {
    this.mainCallback(data)
    return {
      afterClose: (cb: Function) => {
        this.callerCallback = cb
      }
    }
  }

  send (val) {
    if (this.callerCallback) {
      this.callerCallback(val)
      this.mainCallback(null)
      this.callerCallback = null
    }
  }

}
