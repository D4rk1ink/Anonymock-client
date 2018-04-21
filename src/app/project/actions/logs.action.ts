import { Action } from '@ngrx/store'

export const ISLOADING = '[Logs] IsLoading'
export const SEARCH = '[Logs] Search'
export const PAGE = '[Logs] Page'
export const LIMITPAGE = '[Logs] LimitPage'
export const ITEMS = '[Logs] Items'
export const CLEAR = '[Logs] Clear'

export class IsLoadingAction implements Action {
    readonly type = ISLOADING

    constructor (public payload) { }
}

export class SearchAction implements Action {
    readonly type = SEARCH

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
| PageAction
| LimitPageAction
| ItemsAction
| ClearAction
