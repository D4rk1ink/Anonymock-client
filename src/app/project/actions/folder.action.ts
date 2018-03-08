import { Action } from '@ngrx/store'

export const ID = '[Folder] Id'
export const NAME = '[Folder] Name'
export const SEARCHENDPOINT = '[Folder] SearchEndpoint'
export const PAGE = '[Folder] Page'
export const LIMITPAGE = '[Folder] LimitPage'
export const ENDPOINTS = '[Folder] Endpoints'
export const CLEAR = '[Folder] Clear'

export class IdAction implements Action {
    readonly type = ID

    constructor (public payload) { }
}

export class NameAction implements Action {
    readonly type = NAME

    constructor (public payload) { }
}

export class SearchEndpointAction implements Action {
    readonly type = SEARCHENDPOINT

    constructor (public payload) { }
}

export class PageAction implements Action {
    readonly type = PAGE

    constructor (public payload) { }
}

export class LimitPageAction implements Action {
    readonly type = LIMITPAGE

    constructor (public payload) { }
}

export class EndpointsAction implements Action {
    readonly type = ENDPOINTS

    constructor (public payload) { }
}

export class ClearAction implements Action {
    readonly type = CLEAR

    constructor (public payload) { }
}

export type Actions
= IdAction
| NameAction
| SearchEndpointAction
| PageAction
| LimitPageAction
| EndpointsAction
| ClearAction