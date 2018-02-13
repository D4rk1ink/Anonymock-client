import { Action, ActionReducer } from '@ngrx/store'
import * as databaseAction from '../actions/database.action'

export interface State {
    data: string
    schema: string
    generate: string
    custom: string
}

const initialState: State = {
    data: '[]',
    schema: '{}',
    generate: '{}',
    custom: '[]'
}

export function reducer (state = initialState, action: databaseAction.Actions): State {
    switch (action.type) {
        case databaseAction.DATABASE: 
            return action.payload
        case databaseAction.DATA: 
            return {
                ...state,
                data: action.payload
            }
        case databaseAction.SCHEMA: 
            return {
                ...state,
                schema: action.payload
            }
        case databaseAction.GENERATE: 
            return {
                ...state,
                generate: action.payload
            }
        case databaseAction.CUSTOM: 
            return {
                ...state,
                custom: action.payload
            }
        default: 
            return state
    }
}

export const getData = (state: State) => state.data
export const getSchema = (state: State) => state.schema
export const getGenerate = (state: State) => state.generate
export const getCustom = (state: State) => state.custom
export const getAll = (state: State) => state