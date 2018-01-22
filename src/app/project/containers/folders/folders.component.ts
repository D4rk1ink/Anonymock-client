import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.scss']
})
export class FoldersComponent implements OnInit {

  public folders: any[]
  public isNewFolder: boolean

  constructor () {
    this.folders = [
      {
        id: 'xHgbfVl',
        name: 'Account',
        countEndpoints: 5
      },
      {
        id: 'jHpjvSc',
        name: 'Promotion',
        countEndpoints: 10
      },
      {
        id: 'CdcGhlw',
        name: 'Payment',
        countEndpoints: 7
      },
      {
        id: 'nBjGdrL',
        name: 'Order',
        countEndpoints: 22
      },
    ]
  }

  ngOnInit () {
  }

  onNew () {
    this.isNewFolder = true
  }

  onSubmitNewFolder () {
    this.isNewFolder = false
  }

}
