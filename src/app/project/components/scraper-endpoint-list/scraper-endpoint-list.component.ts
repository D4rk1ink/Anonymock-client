import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'scraper-endpoint-list',
  templateUrl: './scraper-endpoint-list.component.html',
  styleUrls: ['./scraper-endpoint-list.component.scss']
})
export class ScraperEndpointListComponent implements OnInit {

  @ContentChild(TemplateRef) templ
  @Input('endpoints') endpoints: any

  public endpointTarget: string

  constructor () { }

  ngOnInit () {
  }

  onExpand (id) {
    if (this.endpointTarget !== id) {
      this.endpointTarget = id
    }
  }

}
