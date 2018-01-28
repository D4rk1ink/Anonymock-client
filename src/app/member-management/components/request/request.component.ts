import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  
  @Input('members') members: any[]

  constructor() { }

  ngOnInit() {
  }

}
