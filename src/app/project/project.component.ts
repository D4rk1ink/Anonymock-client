import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  public path: string

  public param: any
  public tempParam: any

  public env: any
  public tempEnv: any
  ngOnInit () {
    this.tempParam = {}
    this.tempEnv = {}
  }

  onPathChange (path: string) {
    this.paramsFilter(path)
    this.envsFilter(path) 
  }

  paramsFilter (path) {
    this.param = {}
    const paramsRegExp = /\{\$param\.([A-Za-z0-9|\.]+[A-Za-z0-9])\}/g
    const keys = this.keysFilter(paramsRegExp, path)
    for (const key of keys) {
      this.param[key] = this.tempParam[key] || ''
    }
  }

  envsFilter (path) {
    this.env = {}
    const envsRegExp = /\{\$env\.([A-Za-z0-9|\.]+[A-Za-z0-9])\}/g
    const keys = this.keysFilter(envsRegExp, path)
    for (const key of keys) {
      this.env[key] = this.tempEnv[key] || ''
    }
  }

  keysFilter (pattern, path) {
    const match = path.match(pattern) || []
    const keys = match
      .map(param => new RegExp(pattern).exec(param).slice(1).pop())
      .filter(param => !new RegExp(/\.{2,}/g).test(param))
    return keys
  }

  onParamValueChange (key: string, value: string) {
    this.tempParam[key] = value
  }

  onEnvValueChange (key: string, value: string) {
    this.tempEnv[key] = value
  }
}
