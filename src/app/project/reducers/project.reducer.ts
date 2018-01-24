import { Action, ActionReducer } from '@ngrx/store'
import * as projectAction from '../actions/project.action'

export interface State {
    id: string
    name: string
}

const initialState: State = {
    id: null,
    name: null
}

export function reducer (state = initialState, action: projectAction.Actions): State {
    switch (action.type) {
        case projectAction.ID: 
            return {
                ...state,
                id: action.payload
            }
        case projectAction.NAME: 
            return {
                ...state,
                name: action.payload
            }
        default:
            return state
    }
}

export const getId = (state: State) => state.id
export const getName = (state: State) => state.name
export const getAll = (state: State) => state