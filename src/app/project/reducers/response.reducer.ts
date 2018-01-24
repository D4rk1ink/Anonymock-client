import { Action, ActionReducer } from '@ngrx/store'
import * as responseAction from '../actions/response.action'

export interface State {
    id: string
    name: string
}

const initialState: State = {
    id: null,
    name: null
}

export function reducer (state = initialState, action: responseAction.Actions): State {
    switch (action.type) {
        case responseAction.ID: 
            return {
                ...state,
                id: action.payload
            }
        case responseAction.NAME: 
            return {
                ...state,
                name: action.payload
            }
    }
}

export const getId = (state: State) => state.id
export const getName = (state: State) => state.name
export const getAll = (state: State) => state