import { Action, ActionReducer } from '@ngrx/store'
import * as membersAction from '../actions/members.action'

export interface State {
    isLoading: boolean
    search: string
    items: any[]
}

const initialState: State = {
    isLoading: true,
    search: '',
    items: [],
}

export function reducer (state = initialState, action: membersAction.Actions): State {
    switch (action.type) {
        case membersAction.ISLOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case membersAction.SEARCH:
            return {
                ...state,
                search: action.payload
            }
        case membersAction.ITEMS:
            return {
                ...state,
                items: action.payload
            }
        case membersAction.CLEAR:
            return initialState
        default:
            return state
    }
}

export const getAll = (state: State) => state
export const getIsLoading = (state: State) => state.isLoading
export const getSearch = (state: State) => state.search
export const getItems = (state: State) => state.items
