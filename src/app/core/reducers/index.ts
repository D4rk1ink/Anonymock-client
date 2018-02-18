import { createSelector } from 'reselect'
import { ActionReducer, ActionReducerMap, combineReducers } from '@ngrx/store'
import * as fromUser from './user.reducer'

export interface CoreState {
    user: fromUser.State
}

export const coreReducers: ActionReducerMap<CoreState> = {
    user: fromUser.reducer
}

export const getUserState = (state: CoreState) => state.user
export const getUser = createSelector(getUserState, fromUser.getAll)
export const getUserId = createSelector(getUserState, fromUser.getId)
export const getUserFirstname = createSelector(getUserState, fromUser.getFirstname)
export const getUserLastname = createSelector(getUserState, fromUser.getLastname)
export const getUserEmail = createSelector(getUserState, fromUser.getEmail)
export const getUserPicture = createSelector(getUserState, fromUser.getPicture)