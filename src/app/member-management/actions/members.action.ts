import { Action } from '@ngrx/store'

export const ISLOADING = '[Members] IsLoading'
export const SEARCH = '[Members] Search'
export const ITEMS = '[Members] Items'
export const CLEAR = '[Members] Clear'

export class IsLoadingAction implements Action {
    readonly type = ISLOADING

    constructor (public payload) { }
}

export class SearchAction implements Action {
    readonly type = SEARCH

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
| SearchAction
| ItemsAction
| ClearAction
