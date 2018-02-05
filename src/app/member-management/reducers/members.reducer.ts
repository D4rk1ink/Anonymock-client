import { Action, ActionReducer } from '@ngrx/store'
import * as membersAction from '../actions/members.action'

export interface State {
    members: any[]
}

const initialState: State = {
    members: [],
}

export function reducer (state = initialState, action: membersAction.Actions): State {
    switch (action.type) {
        case membersAction.MEMBERS: 
            return {
                ...state,
                members: action.payload
            }
        default: 
            return state
    }
}

export const getMembers = (state: State) => state.members
export const getAll = (state: State) => state