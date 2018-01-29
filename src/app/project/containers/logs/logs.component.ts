import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  public logs: any

  constructor () {
    this.logs = [
      {
        id: 'h8jFkidV82Flvsd',
        name: 'Verify Account',
        method: 'GET',
        path: '/verify-account/001',
        date: 1110121500
      },
      {
        id: 'l0JhfiFslmvCei6',
        name: 'Verify Account',
        method: 'GET',
        path: '/verify-account/002',
        date: 1110121500
      },
      {
        id: 'nFge4Hf6g7kDsvR',
        name: 'Verify Promotion',
        method: 'PUT',
        path: '/verify-promotion',
        date: 1110121500
      },
      {
        id: 'D6H7jfg8kvbf1df',
        name: 'Checkout',
        method: 'PATCH',
        path: '/checkout',
        date: 1110121500
      }
    ]
  }

  ngOnInit() {
  }

}
