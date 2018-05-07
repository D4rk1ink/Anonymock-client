import { createSelector } from 'reselect'
import { ActionReducer, ActionReducerMap, combineReducers } from '@ngrx/store'
import * as fromProjects from './projects.reducer'
import * as fromUser from './user.reducer'
import * as fromOther from './other.reducer'

export interface CoreState {
    projects: fromProjects.State,
    user: fromUser.State,
    other: fromOther.State
}

export const coreReducers: ActionReducerMap<CoreState> = {
    projects: fromProjects.reducer,
    user: fromUser.reducer,
    other: fromOther.reducer
}

export const getProjectsState = (state: CoreState) => state.projects
export const getProjects = createSelector(getProjectsState, fromProjects.getAll)
export const getProjectsItems = createSelector(getProjectsState, fromProjects.getItems)

export const getUserState = (state: CoreState) => state.user
export const getUser = createSelector(getUserState, fromUser.getAll)
export const getUserId = createSelector(getUserState, fromUser.getId)
export const getUserFirstname = createSelector(getUserState, fromUser.getFirstname)
export const getUserLastname = createSelector(getUserState, fromUser.getLastname)
export const getUserEmail = createSelector(getUserState, fromUser.getEmail)
export const getUserPicture = createSelector(getUserState, fromUser.getPicture)
export const getUserIsAdmin = createSelector(getUserState, fromUser.getIsAdmin)

export const getOtherState = (state: CoreState) => state.other
export const getOther = createSelector(getOtherState, fromOther.getAll)
export const getOtherProfileDropdown = createSelector(getOtherState, fromOther.getIsProfileDropdown)
export const getOtherProfilePopup = createSelector(getOtherState, fromOther.getIsProfilePopup)
export const getOtherIsOtherUserPopup = createSelector(getOtherState, fromOther.getIsOtherUserPopup)
export const getOtherOtherUserPopup = createSelector(getOtherState, fromOther.getOtherUserPopup)
