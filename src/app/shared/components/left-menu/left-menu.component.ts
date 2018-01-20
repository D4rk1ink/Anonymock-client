import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  public menuTarget
  public projects = [
    {
      id: 'xDdef',
      name: 'My AIS',
      folders: [
        {
          id: 'xDvScs',
          name: 'Auth Service'
        },
        {
          id: 'xdFrDs',
          name: 'Auth Service'
        }
      ]
    },
    {
      id: 'GjnFs',
      name: 'My Channel',
      folders: [
        {
          id: 'FgtHhj',
          name: 'Auth Service'
        },
        {
          id: 'AdegFb',
          name: 'Auth Service'
        }
      ]
    },
    {
      id: 'FGrbS',
      name: 'My Room',
      folders: [
        {
          id: 'UfufDv',
          name: 'Auth Service'
        },
        {
          id: 'VhSvaa',
          name: 'Auth Service'
        }
      ]
    }
  ]

  constructor () { }

  ngOnInit () {
  }

  expand (id: string) {
    this.menuTarget = id
  }

}
