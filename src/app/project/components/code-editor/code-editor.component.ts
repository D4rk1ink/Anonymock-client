import { Component, OnInit, OnChanges, Input, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements OnInit, OnChanges {

  @Input('text') text: any
  @Input('mode') mode: string
  @Input('readOnly') readOnly: boolean
  @Output('change') change: EventEmitter<any>
  @ViewChild('editor') editor

  public options: any
  
  constructor () {
    this.change = new EventEmitter<any>()
  }

  ngOnChanges () {
    if (this.text) {
      this.text = JSON.stringify(this.text)
    }
  }

  ngAfterViewInit () {
    this.editor.setTheme("tomorrow")

    this.editor.getEditor().setOptions({
      enableBasicAutocompletion: true,
      maxLines: 15,
      minLines: 3
    })
  }

  ngOnInit () {
  }

  onChange (text) {
    this.change.emit(text)
  }
}
