import { Action, ActionReducer } from '@ngrx/store'
import * as folderAction from '../actions/folder.action'

export interface State {
    id: string
    name: string
    endpoints: any[]
}

const initialState: State = {
    id: null,
    name: null,
    endpoints: []
}

export function reducer (state = initialState, action: folderAction.Actions): State {
    switch (action.type) {
        case folderAction.ID: 
            return {
                ...state,
                id: action.payload
            }
        case folderAction.NAME: 
            return {
                ...state,
                name: action.payload
            }
        case folderAction.ENDPOINTS: 
            return {
                ...state,
                endpoints: action.payload
            }
    }
}

export const getId = (state: State) => state.id
export const getName = (state: State) => state.name
export const getEndpoint = (state: State) => state.endpoints
export const getAll = (state: State) => state