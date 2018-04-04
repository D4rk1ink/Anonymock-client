import { Action } from '@ngrx/store'

export const ISLOADING = '[Scraper] IsLoading'
export const ID = '[Scraper] Id'
export const SEARCH = '[Scraper] Search'
export const PAGE = '[Scraper] Page'
export const LIMITPAGE = '[Scraper] LimitPage'
export const ITEMS = '[Scraper] Items'
export const CLEAR = '[Scraper] Clear'

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