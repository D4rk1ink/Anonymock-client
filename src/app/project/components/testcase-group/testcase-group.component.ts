import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'testcase-group',
  templateUrl: './testcase-group.component.html',
  styleUrls: ['./testcase-group.component.scss']
})
export class TestcaseGroupComponent implements OnInit {

  @Input('responses') responses: any[]
  public environment: string

  constructor () {
  }

  ngOnInit () {
  }

  onNew () {
  }

}
