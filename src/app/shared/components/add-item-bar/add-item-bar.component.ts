import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'add-item-bar',
  templateUrl: './add-item-bar.component.html',
  styleUrls: ['./add-item-bar.component.scss']
})
export class AddItemBarComponent implements OnInit {

  @Input('text') text: string

  constructor () { }

  ngOnInit () {
  }

}
