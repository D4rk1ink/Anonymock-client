import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'key-value-group',
  templateUrl: './key-value-group.component.html',
  styleUrls: ['./key-value-group.component.scss']
})
export class KeyValueGroupComponent implements OnInit {

  public temp: any

  constructor() {
    this.temp = {}
  }

  ngOnInit() {
  }

  saveTemp (data) {
    console.log(data)
    this.temp[data.key] = data.value
  }

}
