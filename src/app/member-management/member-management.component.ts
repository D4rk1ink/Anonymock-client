import { Component, OnInit } from '@angular/core'
import { slideAnimation } from 'app/shared/animations/slide.animation'

@Component({
  selector: 'app-member-management',
  templateUrl: './member-management.component.html',
  styleUrls: ['./member-management.component.scss'],
  animations: [slideAnimation]
})
export class MemberManagementComponent implements OnInit {

  constructor () {
  }

  ngOnInit () {
  }

  getRouterOutletLevel (outlet) {
    return outlet.activatedRouteData['level'] || 1
  }

}
