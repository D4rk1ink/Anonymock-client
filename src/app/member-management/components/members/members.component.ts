import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  @Input('members') members: any[]

  constructor () {
  }

  ngOnInit () {
  }

}
