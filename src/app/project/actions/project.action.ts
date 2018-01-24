import { Action } from '@ngrx/store'

export const ID = '[Project] Id'
export const NAME = '[Project] Name'

export class IdAction implements Action {
    readonly type = ID

    constructor (public payload) { }
}

export class NameAction implements Action {
    readonly type = NAME

    constructor (public payload) { }
}

export type Actions
= IdAction
| NameAction
