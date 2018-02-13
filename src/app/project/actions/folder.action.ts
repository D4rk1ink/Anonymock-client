import { Action } from '@ngrx/store'

export const ID = '[Folder] Id'
export const NAME = '[Folder] Name'
export const ENDPOINTS = '[Folder] Endpoints'

export class IdAction implements Action {
    readonly type = ID

    constructor (public payload) { }
}

export class NameAction implements Action {
    readonly type = NAME

    constructor (public payload) { }
}

export class EndpointsAction implements Action {
    readonly type = ENDPOINTS

    constructor (public payload) { }
}

export type Actions
= IdAction
| NameAction
| EndpointsAction