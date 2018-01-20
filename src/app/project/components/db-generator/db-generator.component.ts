import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'db-generator',
  templateUrl: './db-generator.component.html',
  styleUrls: ['./db-generator.component.scss']
})
export class DbGeneratorComponent implements OnInit {

  public menuSelector: string
  public menu: any[] = [
    { id: 'M01', title: 'Generate' },
    { id: 'M02', title: 'Custom' }
  ]

  constructor () {
    this.menuSelector = this.menu[0].id
  }

  ngOnInit () {

  }

  onSelectMenu (id) {
    this.menuSelector = id
  }

}
