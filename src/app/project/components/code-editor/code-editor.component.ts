import { Component, OnInit, OnChanges, Input, Output, ViewChild, EventEmitter, SimpleChanges, SimpleChange } from '@angular/core'
import { AceEditorComponent } from 'ng2-ace-editor'

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
  @ViewChild('editor') editor: AceEditorComponent

  public _text: string
  public options: any

  constructor () {
    this.change = new EventEmitter<any>()
  }

  ngOnChanges (change: SimpleChanges) {
    if (this.text) {
      if (typeof this.text === 'object') {
        this._text = this.pretty(JSON.stringify(this.text))
      } else {
        this._text = this.pretty(this.text)
      }
    }
  }

  ngAfterViewInit () {
    this.editor.setTheme('tomorrow')

    this.editor.getEditor().setOptions({
      enableBasicAutocompletion: true,
      useWorker: false,
      maxLines: 15,
      minLines: 3
    })
    this.editor.getEditor().$blockScrolling = Infinity
  }

  ngOnInit () {
  }

  onChange (text) {
    text = text.trim()
    if (text != '' && this._text !== text) {
      this.change.emit(text)
    }
  }

  pretty(text) {
    try {
      text = text.replace(/(^"|"$)/gi, '')
      text = JSON.stringify(JSON.parse(text), null, 4)
    } catch (err) {}
    return text
  }
}
