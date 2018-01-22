import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'endpoints-group',
  templateUrl: './endpoints-group.component.html',
  styleUrls: ['./endpoints-group.component.scss']
})
export class EndpointsGroupComponent implements OnInit {

  public endpoints: any[]

  constructor () {
    this.endpoints = [
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

  ngOnInit () {
  }

  onNew () {  
  }

}
