import { Action } from '@ngrx/store'

export const ITEMS = '[Projects] Items'

export class ItemsAction implements Action {
    readonly type = ITEMS

    constructor (public payload) { }
}

export type Actions
= ItemsAction
