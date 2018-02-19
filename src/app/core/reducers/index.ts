import { createSelector } from 'reselect'
import { ActionReducer, ActionReducerMap, combineReducers } from '@ngrx/store'
import * as fromProjects from './projects.reducer'
import * as fromUser from './user.reducer'

export interface CoreState {
    projects: fromProjects.State,
    user: fromUser.State
}

export const coreReducers: ActionReducerMap<CoreState> = {
    projects: fromProjects.reducer,
    user: fromUser.reducer
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