import { Action, ActionReducer } from '@ngrx/store'
import * as foldersAction from '../actions/folders.action'

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

export function reducer (state = initialState, action: foldersAction.Actions): State {
    switch (action.type) {
        case foldersAction.ISLOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case foldersAction.SEARCH:
            return {
                ...state,
                search: action.payload
            }
        case foldersAction.PAGE:
            return {
                ...state,
                page: action.payload
            }
        case foldersAction.LIMITPAGE:
            return {
                ...state,
                limitPage: action.payload
            }
        case foldersAction.ITEMS:
            return {
                ...state,
                items: action.payload
            }
        case foldersAction.CLEAR:
            return initialState
        default:
            return state
    }
}

export const getIsLoading = (state: State) => state.isLoading
export const getSearch = (state: State) => state.search
export const getPage = (state: State) => state.page
export const getLimitPage = (state: State) => state.limitPage
export const getItems = (state: State) => state.items
export const getAll = (state: State) => state
