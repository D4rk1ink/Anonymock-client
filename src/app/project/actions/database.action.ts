import { Action } from '@ngrx/store'

export const DATABASE = '[Database] Database'
export const DATA = '[Database] Data'
export const SCHEMA = '[Database] Schema'
export const GENERATE = '[Database] Generate'
export const CUSTOM = '[Database] Custom'

export class DatabaseAction implements Action {
    readonly type = DATABASE

    constructor (public payload) { }
}

export class DataAction implements Action {
    readonly type = DATA

    constructor (public payload) { }
}

export class SchemaAction implements Action {
    readonly type = SCHEMA

    constructor (public payload) { }
}

export class GenerateAction implements Action {
    readonly type = GENERATE

    constructor (public payload) { }
}

export class CustomAction implements Action {
    readonly type = CUSTOM

    constructor (public payload) { }
}

export type Actions
= DatabaseAction
| DataAction
| SchemaAction
| GenerateAction
| CustomAction
