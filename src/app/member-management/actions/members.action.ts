import { Action } from '@ngrx/store';

export const MEMBERS = '[Members] Members'

export class MembersAction implements Action {
    readonly type = MEMBERS

    constructor (public payload) { }
}

export type Actions
= MembersAction