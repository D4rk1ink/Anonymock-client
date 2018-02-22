import { Action, ActionReducer } from '@ngrx/store'
import * as responseAction from '../actions/response.action'

export interface State {
    id: string
    name: string
    condition: {
        params: any[],
        headers: any[],
        body: any,
        queryString: any[]
    }
    response: {
        headers: any[],
        body: any,
        delay: number,
        statusCode: number
    }
}

const initialState: State = {
    id: null,
    name: null,
    condition: {
        params: [],
        headers: [],
        body: {},
        queryString: []
    },
    response: {
        headers: [],
        body: {},
        delay: 10,
        statusCode: 200
    }
}

export function reducer (state = initialState, action: responseAction.Actions): State {
    switch (action.type) {
        case responseAction.ALL: 
            return action.payload
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
        case responseAction.CONDITION: 
            return {
                ...state,
                condition: action.payload
            }
        case responseAction.RESPONSE: 
            return {
                ...state,
                response: action.payload
            }
        case responseAction.CLEAR: 
            return initialState
        default: 
            return state
    }
}

export const getId = (state: State) => state.id
export const getName = (state: State) => state.name
export const getCondition = (state: State) => state.condition
export const getResponse = (state: State) => state.response
export const getAll = (state: State) => state