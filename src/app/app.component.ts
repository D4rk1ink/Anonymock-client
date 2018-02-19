import { Component } from '@angular/core';
import 'brace/index';
import 'brace/theme/github';
import 'brace/theme/tomorrow';
import 'brace/theme/chrome';
import 'brace/mode/json';
import 'brace/worker/json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor () { }
}
