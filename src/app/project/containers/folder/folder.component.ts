import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {

  public folder: any

  constructor () {
    this.folder = {
      id: 'xHgbfVl',
      name: 'Account',
      countEndpoints: 5,
      endpoints: [
        {
          id: 'fG52Rbrh8',
          method: 'GET',
          name: 'Verify account'
        },
        {
          id: 'H90Lhf9Dv',
          method: 'POST',
          name: 'Upgrade promotion'
        },
        {
          id: 'ngH95Fjds',
          method: 'PUT',
          name: 'Verify promotion'
        },
        {
          id: 'j8hlsHov2',
          method: 'PATCH',
          name: 'Cancel promotion'
        },
        {
          id: 'l7Hinv93a',
          method: 'DELETE',
          name: 'Checkout'
        },
      ] 
    }
  }

  ngOnInit () {
  }

}
