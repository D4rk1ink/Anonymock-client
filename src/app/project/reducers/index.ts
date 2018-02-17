import { createSelector } from 'reselect'
import { ActionReducer, ActionReducerMap, combineReducers } from '@ngrx/store'
import * as fromProject from './project.reducer'
import * as fromDatabase from './database.reducer'
import * as fromFolder from './folder.reducer'
import * as fromEndpoint from './endpoint.reducer'
import * as fromEndpoints from './endpoints.reducer'
import * as fromResponse from './response.reducer'

export interface ProjectState {
    project: fromProject.State,
    database: fromDatabase.State,
    folder: fromFolder.State,
    endpoint: fromEndpoint.State,
    endpoints: fromEndpoints.State,
    response: fromResponse.State
}

export const projectReducers: ActionReducerMap<ProjectState> = {
    project: fromProject.reducer,
    database: fromDatabase.reducer,
    folder: fromFolder.reducer,
    endpoint: fromEndpoint.reducer,
    endpoints: fromEndpoints.reducer,
    response: fromResponse.reducer
}

export const getProjectState = (state: ProjectState) => state.project
export const getProject = createSelector(getProjectState, fromProject.getAll)
export const getProjectId = createSelector(getProjectState, fromProject.getId)
export const getProjectName = createSelector(getProjectState, fromProject.getName)

export const getDatabaseState = (state: ProjectState) => state.database
export const getDatabase = createSelector(getDatabaseState, fromDatabase.getAll)
export const getDatabaseData = createSelector(getDatabaseState, fromDatabase.getData)
export const getDatabaseSchema = createSelector(getDatabaseState, fromDatabase.getSchema)
export const getDatabaseGenerate = createSelector(getDatabaseState, fromDatabase.getGenerate)
export const getDatabaseCustom = createSelector(getDatabaseState, fromDatabase.getCustom)

export const getFolderState = (state: ProjectState) => state.folder
export const getFolder = createSelector(getFolderState, fromFolder.getAll)
export const getFolderId = createSelector(getFolderState, fromFolder.getId)
export const getFolderName = createSelector(getFolderState, fromFolder.getName)
export const getFolderEndpoints = createSelector(getFolderState, fromFolder.getEndpoints)

export const getEndpointState = (state: ProjectState) => state.endpoint
export const getEndpoint = createSelector(getEndpointState, fromEndpoint.getAll)
export const getEndpointId = createSelector(getEndpointState, fromEndpoint.getId)
export const getEndpointName = createSelector(getEndpointState, fromEndpoint.getName)
export const getEndpointPath = createSelector(getEndpointState, fromEndpoint.getPath)
export const getEndpointMethod = createSelector(getEndpointState, fromEndpoint.getMethod)
export const getEndpointFolder = createSelector(getEndpointState, fromEndpoint.getFolder)
export const getEndpointResponses = createSelector(getEndpointState, fromEndpoint.getResponses)

export const getEndpointsState = (state: ProjectState) => state.endpoints
export const getEndpoints = createSelector(getEndpointsState, fromEndpoints.getAll)
export const getEndpointsSearchEndpoint = createSelector(getEndpointsState, fromEndpoints.getSearchEndpoint)
export const getEndpointsPage = createSelector(getEndpointsState, fromEndpoints.getPage)
export const getEndpointsLimitPage = createSelector(getEndpointsState, fromEndpoints.getLimitPage)
export const getEndpointsItems = createSelector(getEndpointsState, fromEndpoints.getItems)

export const getResponseState = (state: ProjectState) => state.response
export const getResponse = createSelector(getResponseState, fromResponse.getAll)
export const getResponseId = createSelector(getResponseState, fromResponse.getId)
export const getResponseName = createSelector(getResponseState, fromResponse.getName)