import { Action } from '@ngrx/store'

export const ISLOADING = '[Endpoints] IsLoading'
export const ITEMS = '[Endpoints] Items'
export const CLEAR = '[Endpoints] Clear'

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
