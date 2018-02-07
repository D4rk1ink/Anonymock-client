import { Component, OnInit, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'input-add-member',
  templateUrl: './input-add-member.component.html',
  styleUrls: ['./input-add-member.component.scss']
})
export class InputAddMemberComponent implements OnInit {

  @Input('users') users: any[]
  @Output('keyinput') keyinput: EventEmitter<string>
  @Output('add') add: EventEmitter<any>

  private wasInside: boolean
  public isAutocomplete: boolean

  constructor(
    private eRef: ElementRef
  ) {
    this.users = []
    this.keyinput = new EventEmitter<string>()
    this.add = new EventEmitter<any>()
  }

  @HostListener('click')
  clickInside() {
    this.wasInside = true;
  }

  @HostListener('document:click')
  clickout() {
    if (!this.wasInside) {
      this.isAutocomplete = false
    }
    this.wasInside = false;
  }

  ngOnInit() {
  }

  onInput (val) {
    this.isAutocomplete = true
    this.keyinput.emit(val)
  }

  onAdd (user) {
    this.add.emit(user)
  }

}
