import { Action } from '@ngrx/store'

export const THEME = '[Other] Theme'
export const ISPROFILEDROPDOWN = '[Other] IsProfileDropdown'
export const ISPROFILEPOPUP = '[Other] IsProfilePopup'
export const ISOTHERUSERPOPUP = '[Other] IsOtherUserPopup'
export const OTHERUSERPOPUP = '[Other] OtherUserPopup'
export const CLEAR = '[Other] Clear'

export class ThemeAction implements Action {
    readonly type = THEME

    constructor (public payload) { }
}

export class IsProfileDropdownAction implements Action {
    readonly type = ISPROFILEDROPDOWN

    constructor () { }
}

export class IsProfilePopupAction implements Action {
    readonly type = ISPROFILEPOPUP

    constructor () { }
}

export class IsOtherUserPopupAction implements Action {
    readonly type = ISOTHERUSERPOPUP

    constructor (public payload) { }
}

export class OtherUserPopupAction implements Action {
    readonly type = OTHERUSERPOPUP

    constructor (public payload) { }
}

export class ClearAction implements Action {
    readonly type = CLEAR

    constructor () { }
}

export type Actions
= ThemeAction
| IsProfileDropdownAction
| IsProfilePopupAction
| IsOtherUserPopupAction
| OtherUserPopupAction
| ClearAction
