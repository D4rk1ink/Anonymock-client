import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {

  public data: any
  public row: number
  public size: any
  constructor () {
    this.row = 0
    this.size = 0
  }

  ngOnInit () {
    this.data = [{"data": "aa"}]
    if (Array.isArray(this.data)) {
      this.row = this.data.length
      this.size = 0.5
    }
  }

}
