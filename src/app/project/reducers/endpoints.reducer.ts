import { Action, ActionReducer } from '@ngrx/store'
import * as endpointsAction from '../actions/endpoints.action'

export interface State {
    search: string
    page: number
    limitPage: number
    items: any[]
}

const initialState: State = {
    search: '',
    page: 1,
    limitPage: 1,
    items: []
}

export function reducer (state = initialState, action: endpointsAction.Actions): State {
    switch (action.type) {
        case endpointsAction.SEARCH: 
            return {
                ...state,
                search: action.payload
            }
        case endpointsAction.PAGE: 
            return {
                ...state,
                page: action.payload
            }
        case endpointsAction.LIMITPAGE: 
            return {
                ...state,
                limitPage: action.payload
            }
        case endpointsAction.ITEMS: 
            return {
                ...state,
                items: action.payload
            }
        case endpointsAction.CLEAR: 
            return initialState
        default: 
            return state
    }
}

export const getSearchEndpoint = (state: State) => state.search
export const getPage = (state: State) => state.page
export const getLimitPage = (state: State) => state.limitPage
export const getItems = (state: State) => state.items
export const getAll = (state: State) => state