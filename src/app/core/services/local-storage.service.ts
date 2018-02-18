import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  saveToken (token) {
    localStorage.setItem('token', token)
  }

  getToken () {
    return localStorage.getItem('token')
  }

  saveUser (token: Object) {
    localStorage.setItem('user', JSON.stringify(token))
  }

  getUser () {
    return JSON.parse(localStorage.getItem('user'))
  }

  saveProject (projectId) {
    localStorage.setItem('project', projectId)
  }

  getProject () {
    return localStorage.getItem('project')
  }

  clearAll () {
    localStorage.clear()
  }



}
