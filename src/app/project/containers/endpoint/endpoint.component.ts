import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-endpoint',
  templateUrl: './endpoint.component.html',
  styleUrls: ['./endpoint.component.scss']
})
export class EndpointComponent implements OnInit {

  public name: string
  public path: string

  constructor () {
    this.name = 'Check Promotion'
    this.path = '/check-promotion/{user-id}'
  }

  ngOnInit () {
  }

}
