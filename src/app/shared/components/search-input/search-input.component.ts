import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  @Output('out') out: EventEmitter<any>

  public isFocus: boolean

  constructor(
    private el: ElementRef
  ) {
    this.out = new EventEmitter<any>()
  }

  ngOnInit() {
  }

  onChange (text) {
    this.out.emit(text)
  }

  onFocus () {
    this.el.nativeElement.querySelector('.input').focus()
    this.isFocus = true
  }

  onBlur () {
    this.isFocus = false
  }

}
