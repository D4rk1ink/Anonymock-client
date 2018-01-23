import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'endpoint-group',
  templateUrl: './endpoint-group.component.html',
  styleUrls: ['./endpoint-group.component.scss']
})
export class EndpointGroupComponent implements OnInit {

  @Input('endpoints') endpoints: any[]

  constructor (
    private router: Router
  ) {
    
  }

  ngOnInit () {
  }

  onLink (id) {
    const projectId = new RegExp('/([A-Za-z]*)').exec(location.pathname)[1]
    this.router.navigateByUrl(`/${projectId}/endpoint/${id}`)
  }

  onNew () {
    
  }

}
