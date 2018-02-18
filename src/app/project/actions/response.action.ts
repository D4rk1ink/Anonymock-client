import { Action } from '@ngrx/store'

export const ID = '[Response] Id'
export const NAME = '[Response] Name'
export const CONDITION = '[Response] Condition'
export const RESPONSE = '[Response] Response'

export class IdAction implements Action {
    readonly type = ID

    constructor (public payload) { }
}

export class NameAction implements Action {
    readonly type = NAME

    constructor (public payload) { }
}

export class ConditionAction implements Action {
    readonly type = CONDITION

    constructor (public payload) { }
}

export class ResponseAction implements Action {
    readonly type = RESPONSE

    constructor (public payload) { }
}

export type Actions
= IdAction
| NameAction
| ConditionAction
| ResponseAction
