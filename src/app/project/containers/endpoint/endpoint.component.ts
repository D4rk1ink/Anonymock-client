import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-endpoint',
  templateUrl: './endpoint.component.html',
  styleUrls: ['./endpoint.component.scss']
})
export class EndpointComponent implements OnInit {

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

}
