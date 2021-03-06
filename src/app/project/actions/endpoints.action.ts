import { Action } from '@ngrx/store'

export const ISLOADING = '[Endpoints] IsLoading'
export const ID = '[Endpoints] Id'
export const SEARCH = '[Endpoints] Search'
export const PAGE = '[Endpoints] Page'
export const LIMITPAGE = '[Endpoints] LimitPage'
export const ITEMS = '[Endpoints] Items'
export const CLEAR = '[Endpoints] Clear'

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
