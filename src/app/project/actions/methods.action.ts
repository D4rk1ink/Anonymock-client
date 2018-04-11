import { Action } from '@ngrx/store'

export const ISLOADING = '[METHODS] IsLoading'
export const ITEMS = '[METHODS] Items'
export const CLEAR = '[METHODS] Clear'

export class IsLoadingAction implements Action {
    readonly type = ISLOADING

    constructor (public payload) { }
}

export class ItemsAction implements Action {
    readonly type = ITEMS

    constructor (public payload) { }
}

export class ClearAction implements Action {
    readonly type = CLEAR

    constructor () { }
}

export type Actions
= IsLoadingAction
| ItemsAction
| ClearAction
