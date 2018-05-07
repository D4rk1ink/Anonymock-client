import { Action } from '@ngrx/store'

export const ALL = '[Response] All'
export const ID = '[Response] Id'
export const NAME = '[Response] Name'
export const CONDITION = '[Response] Condition'
export const RESPONSE = '[Response] Response'
export const CLEAR = '[Response] Clear'

export class AllAction implements Action {
    readonly type = ALL

    constructor (public payload) { }
}

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

export class ClearAction implements Action {
    readonly type = CLEAR

    constructor () { }
}

export type Actions
= AllAction
| IdAction
| NameAction
| ConditionAction
| ResponseAction
| ClearAction
