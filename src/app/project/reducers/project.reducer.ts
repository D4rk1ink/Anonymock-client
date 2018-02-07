import { Action, ActionReducer } from '@ngrx/store'
import * as projectAction from '../actions/project.action'

export interface State {
    vid: string
    name: string
    status: boolean,
    description: string,
    repository: string,
    environment: any
}

const initialState: State = {
    vid: null,
    name: null,
    status: true,
    description: null,
    repository: null,
    environment: null
}

export function reducer (state = initialState, action: projectAction.Actions): State {
    switch (action.type) {
        case projectAction.PROJECT: 
            return action.payload
        case projectAction.ID: 
            return {
                ...state,
                vid: action.payload
            }
        case projectAction.NAME: 
            return {
                ...state,
                name: action.payload
            }
        case projectAction.STATUS: 
            return {
                ...state,
                status: action.payload
            }
        case projectAction.DESCRIPTION: 
            return {
                ...state,
                description: action.payload
            }
        case projectAction.REPOSITORY: 
            return {
                ...state,
                repository: action.payload
            }
        case projectAction.ENVIRONMENT: 
            return {
                ...state,
                environment: action.payload
            }
        default:
            return state
    }
}

export const getId = (state: State) => state.vid
export const getName = (state: State) => state.name
export const getAll = (state: State) => state