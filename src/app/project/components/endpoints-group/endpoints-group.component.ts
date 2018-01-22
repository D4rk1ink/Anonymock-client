import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'endpoints-group',
  templateUrl: './endpoints-group.component.html',
  styleUrls: ['./endpoints-group.component.scss']
})
export class EndpointsGroupComponent implements OnInit {

  @Input('endpoints') endpoints: any[]

  constructor () {
    
  }

  ngOnInit () {
  }

  onNew () {  
  }

}
