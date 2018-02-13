import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  @Output('out') out: EventEmitter<any>

  constructor() {
    this.out = new EventEmitter<any>()
  }

  ngOnInit() {
  }

  onChange (text) {
    this.out.emit(text)
  }

}
