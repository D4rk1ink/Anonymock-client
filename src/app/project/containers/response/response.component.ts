import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import * as endpointAction from '../../actions/endpoint.action'
import * as fromProject from '../../reducers'

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent implements OnInit {

  public params: string[]
  public envs: string[]

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.store.select(fromProject.getEndpointPath)
      .subscribe(path => {
        this.paramsFilter(path || '')
        this.envsFilter(path || '')
        console.log(this.params)
        console.log(this.envs)
      })
  }

  paramsFilter (path) {
    const paramPattern = /\{([A-Za-z0-9\-|\.]+)\}/g
    const match = path.match(paramPattern) || []
    this.params = match
      .map(param => new RegExp(paramPattern).exec(param).slice(1).pop())
      .filter((param, i, arr) => param !== '' && !new RegExp(/\.{2,}|\.$/g).test(param) && arr.indexOf(param) === i)
  }

  envsFilter (path) {
    const envsPattern = /\{\$env\.([A-Za-z0-9|\.]+)\}/g
    const match = path.match(envsPattern) || []
    this.envs = match
      .map(param => new RegExp(envsPattern).exec(param).slice(1).pop())
      .filter((param, i, arr) => param !== '' && !new RegExp(/\.{2,}|\.$/g).test(param) && arr.indexOf(param) === i)
  }

}
