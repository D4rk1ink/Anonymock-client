import { Action } from '@ngrx/store'

export const USER = '[User] User'
export const ID = '[User] Id'
export const FIRSTNAME = '[User] Firstname'
export const LASTNAME = '[User] Lastname'
export const EMAIL = '[User] Email'
export const PICTURE = '[User] Picture'
export const ISADMIN = '[User] IsAdmin'

export class UserAction implements Action {
    readonly type = USER

    constructor (public payload) { }
}

export class IdAction implements Action {
    readonly type = ID

    constructor (public payload) { }
}

export class FirstnameAction implements Action {
    readonly type = FIRSTNAME

    constructor (public payload) { }
}

export class LastnameAction implements Action {
    readonly type = LASTNAME

    constructor (public payload) { }
}

export class EmailAction implements Action {
    readonly type = EMAIL

    constructor (public payload) { }
}

export class PictureAction implements Action {
    readonly type = PICTURE

    constructor (public payload) { }
}

export class IsAdminAction implements Action {
    readonly type = ISADMIN

    constructor (public payload) { }
}

export type Actions
= UserAction
| IdAction
| FirstnameAction
| LastnameAction
| EmailAction
| PictureAction
| IsAdminAction