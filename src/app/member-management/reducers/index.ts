import { createSelector } from 'reselect'
import { ActionReducer, ActionReducerMap, combineReducers, createFeatureSelector } from '@ngrx/store'
import * as fromMembers from './members.reducer'

export interface MembersState {
    members: fromMembers.State,
}

// export const membersReducers: ActionReducerMap<MembersState> = {
//     members: fromMembers.reducer,
// }

export const membersReducers = {
    members: fromMembers.reducer,
}

// export const getMembersState = (state: MembersState) => state.members
export const getMembersState = createFeatureSelector<fromMembers.State>('member')
export const getMembers = createSelector(getMembersState, fromMembers.getAll)
export const getMembersIsLoading = createSelector(getMembersState, fromMembers.getIsLoading)
export const getMembersSearch = createSelector(getMembersState, fromMembers.getSearch)
export const getMembersItems = createSelector(getMembersState, fromMembers.getItems)
