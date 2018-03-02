import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'empty-item',
  templateUrl: './empty-item.component.html',
  styleUrls: ['./empty-item.component.scss']
})
export class EmptyItemComponent implements OnInit {

  @Input('isLoading') isLoading: boolean
  @Input('items') items: any[]
  @Input('icon') icon: string
  @Input('message') message: string

  constructor() { }

  ngOnInit() {
  }

}
