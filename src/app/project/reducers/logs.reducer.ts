import { Action, ActionReducer } from '@ngrx/store'
import * as logsAction from '../actions/logs.action'

export interface State {
    isLoading: boolean
    search: string
    page: number
    limitPage: number
    items: any[]
}

const initialState: State = {
    isLoading: true,
    search: '',
    page: 1,
    limitPage: 1,
    items: []
}

export function reducer (state = initialState, action: logsAction.Actions): State {
    switch (action.type) {
        case logsAction.ISLOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case logsAction.SEARCH:
            return {
                ...state,
                search: action.payload
            }
        case logsAction.PAGE:
            return {
                ...state,
                page: action.payload
            }
        case logsAction.LIMITPAGE:
            return {
                ...state,
                limitPage: action.payload
            }
        case logsAction.ITEMS:
            return {
                ...state,
                items: action.payload
            }
        case logsAction.CLEAR:
            return initialState
        default:
            return state
    }
}

export const getSearch = (state: State) => state.search
export const getPage = (state: State) => state.page
export const getLimitPage = (state: State) => state.limitPage
export const getItems = (state: State) => state.items
export const getAll = (state: State) => state
