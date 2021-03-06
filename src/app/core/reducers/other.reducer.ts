import { Action, ActionReducer } from '@ngrx/store'
import * as otherAction from '../actions/other.action'
import * as database from 'app/core/services/database.service'

export interface State {
    theme: string
    isProfileDropdown: boolean
    isProfilePopup: boolean
    isOtherUserPopup: boolean
    otherUserPopup: any
}

const initialState: State = {
    theme: database.getTheme() || 'yellow',
    isProfileDropdown: false,
    isProfilePopup: false,
    isOtherUserPopup: false,
    otherUserPopup: {}
}

export function reducer (state = initialState, action: otherAction.Actions): State {
    switch (action.type) {
        case otherAction.THEME:
            return {
                ...state,
                theme: action.payload
            }
        case otherAction.ISPROFILEDROPDOWN:
            return {
                ...state,
                isProfileDropdown: !state.isProfileDropdown
            }
        case otherAction.ISPROFILEPOPUP:
            return {
                ...state,
                isProfilePopup: !state.isProfilePopup
            }
        case otherAction.ISOTHERUSERPOPUP:
            return {
                ...state,
                isOtherUserPopup: action.payload
            }
        case otherAction.OTHERUSERPOPUP:
            return {
                ...state,
                otherUserPopup: action.payload
            }
        case otherAction.CLEAR:
            return initialState
        default: 
            return state
    }
}

export const getTheme = (state: State) => state.theme
export const getIsProfileDropdown = (state: State) => state.isProfileDropdown
export const getIsProfilePopup = (state: State) => state.isProfilePopup
export const getIsOtherUserPopup = (state: State) => state.isOtherUserPopup
export const getOtherUserPopup = (state: State) => state.otherUserPopup
export const getAll = (state: State) => state
