import { Action } from '@ngrx/store'

export const ID = '[Endpoint] Id'
export const NAME = '[Endpoint] Name'
export const PATH = '[Endpoint] Path'
export const RESPONSES = '[Endpoint] Responses'

export class IdAction implements Action {
    readonly type = ID

    constructor (public payload) { }
}

export class NameAction implements Action {
    readonly type = NAME

    constructor (public payload) { }
}

export class PathAction implements Action {
    readonly type = PATH

    constructor (public payload) { }
}

export class ResponsesAction implements Action {
    readonly type = RESPONSES

    constructor (public payload) { }
}

export type Actions
= IdAction
| NameAction
| PathAction
| ResponsesAction