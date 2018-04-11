import { Action, ActionReducer } from '@ngrx/store'
import * as methodsAction from '../actions/methods.action'

export interface State {
    isLoading: boolean
    items: any[]
}

const initialState: State = {
    isLoading: true,
    items: []
}

export function reducer (state = initialState, action: methodsAction.Actions): State {
    switch (action.type) {
        case methodsAction.ISLOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case methodsAction.ITEMS:
            return {
                ...state,
                items: action.payload
            }
        case methodsAction.CLEAR:
            return initialState
        default:
            return state
    }
}

export const getIsLoading = (state: State) => state.isLoading
export const getItems = (state: State) => state.items
export const getAll = (state: State) => state
