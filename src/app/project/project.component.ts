import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor (
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(param => {
      console.log(param)
      // set project id to store
    })
  }

  ngOnInit () {
    
  }
}
