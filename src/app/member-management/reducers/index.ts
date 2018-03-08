import { createSelector } from 'reselect'
import { ActionReducer, ActionReducerMap, combineReducers } from '@ngrx/store'
import * as fromMembers from './members.reducer'

export interface MembersState {
    members: fromMembers.State,
}

export const membersReducers: ActionReducerMap<MembersState> = {
    members: fromMembers.reducer,
}

export const getMembersState = (state: MembersState) => state.members
export const getMembers = createSelector(getMembersState, fromMembers.getMembers)