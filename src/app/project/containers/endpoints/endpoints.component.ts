import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import * as projectAction from 'app/project/actions/project.action'
import * as fromProject from 'app/project/reducers'

import { projects } from 'app/mock/projects'

@Component({
  selector: 'app-endpoints',
  templateUrl: './endpoints.component.html',
  styleUrls: ['./endpoints.component.scss']
})
export class EndpointsComponent implements OnInit {

  public endpoints: any[]

  constructor (
    private store: Store<any>
  ) {
    this.store.select(fromProject.getProjectId)
      .subscribe(id => {
        
      })

  }

  ngOnInit () {
  }

}
