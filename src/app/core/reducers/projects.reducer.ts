import { Action, ActionReducer } from '@ngrx/store'
import * as projectsAction from '../actions/projects.action'

export interface State {
    items: any[]
}

const initialState: State = {
    items: []
}

export function reducer (state = initialState, action: projectsAction.Actions): State {
    switch (action.type) {
        case projectsAction.ITEMS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}

export const getItems = (state: State) => state.items
export const getAll = (state: State) => state
