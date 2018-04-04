import { Action, ActionReducer } from '@ngrx/store'
import * as scraperAction from '../actions/scraper.action'

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

export function reducer (state = initialState, action: scraperAction.Actions): State {
    switch (action.type) {
        case scraperAction.ISLOADING: 
            return {
                ...state,
                isLoading: action.payload
            }
        case scraperAction.SEARCH: 
            return {
                ...state,
                search: action.payload
            }
        case scraperAction.PAGE: 
            return {
                ...state,
                page: action.payload
            }
        case scraperAction.LIMITPAGE: 
            return {
                ...state,
                limitPage: action.payload
            }
        case scraperAction.ITEMS: 
            return {
                ...state,
                items: action.payload
            }
        case scraperAction.CLEAR: 
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