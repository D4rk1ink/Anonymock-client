import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Input('data') data: any
  
  @Output('destroy') destroy: EventEmitter<any>

  constructor() {
    this.destroy = new EventEmitter<any>()
  }

  ngOnInit() {
    setTimeout(() => {
      this.destroy.emit(this.data.id)
    }, 6000)
  }

  close () {
    this.destroy.emit(this.data.id)
  }
}
