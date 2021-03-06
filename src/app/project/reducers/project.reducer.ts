import { Action, ActionReducer } from '@ngrx/store'
import * as projectAction from '../actions/project.action'

export interface State {
    id: string
    name: string
    status: boolean
    description: string
    repository: string
    forwardEndpoint: string
    environments: any[]
    isManager: boolean
}

const initialState: State = {
    id: null,
    name: '',
    status: true,
    description: '',
    repository: '',
    forwardEndpoint: '',
    environments: [],
    isManager: false
}

export function reducer (state = initialState, action: projectAction.Actions): State {
    switch (action.type) {
        case projectAction.PROJECT:
            return action.payload
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
        case projectAction.ENVIRONMENTS:
            return {
                ...state,
                environments: action.payload
            }
        case projectAction.ISMANAGER:
            return {
                ...state,
                isManager: action.payload
            }
        default:
            return state
    }
}

export const getId = (state: State) => state.id
export const getName = (state: State) => state.name
export const getIsManager = (state: State) => state.isManager
export const getAll = (state: State) => state
