import { Action, ActionReducer } from '@ngrx/store'
import * as endpointAction from '../actions/endpoint.action'

export interface State {
    id: string
    name: string
    method: any
    folder: any
    path: string
    responses: any[]
}

const initialState: State = {
    id: null,
    name: '',
    method: {},
    folder: {},
    path: null,
    responses: []
}

export function reducer (state = initialState, action: endpointAction.Actions): State {
    switch (action.type) {
        case endpointAction.ID: 
            return {
                ...state,
                id: action.payload
            }
        case endpointAction.NAME: 
            return {
                ...state,
                name: action.payload
            }
        case endpointAction.PATH:
            return {
                ...state,
                path: action.payload
            }
        case endpointAction.METHOD:
            return {
                ...state,
                method: action.payload
            }
        case endpointAction.FOLDER:
            return {
                ...state,
                folder: action.payload
            }
        case endpointAction.RESPONSES: 
            return {
                ...state,
                responses: action.payload
            }
        default:
            return state
    }
}

export const getId = (state: State) => state.id
export const getName = (state: State) => state.name
export const getPath = (state: State) => state.path
export const getMethod = (state: State) => state.method
export const getFolder = (state: State) => state.folder
export const getResponses = (state: State) => state.responses
export const getAll = (state: State) => state