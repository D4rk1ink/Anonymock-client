import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'db-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {

  public row: number
  constructor () {
    this.row = 0
  }

  ngOnInit () {
  }

  onDataChange (data) {
    try {
      data = JSON.parse(data)
      if (Array.isArray(data)) {
        this.row = data.length
      } else {
        this.row = 0
      }
    } catch (e) { }
  }

}
