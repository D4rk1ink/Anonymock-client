import { Action } from '@ngrx/store'

export const ISLOADING = '[Endpoint] IsLoading'
export const ID = '[Endpoint] Id'
export const NAME = '[Endpoint] Name'
export const PATH = '[Endpoint] Path'
export const METHOD = '[Endpoint] Method'
export const FOLDER = '[Endpoint] Folder'
export const RESPONSES = '[Endpoint] Responses'

export class IsLoadingAction implements Action {
    readonly type = ISLOADING

    constructor (public payload) { }
}

export class IdAction implements Action {
    readonly type = ID

    constructor (public payload) { }
}

export class NameAction implements Action {
    readonly type = NAME

    constructor (public payload) { }
}

export class PathAction implements Action {
    readonly type = PATH

    constructor (public payload) { }
}

export class MethodAction implements Action {
    readonly type = METHOD

    constructor (public payload) { }
}

export class FolderAction implements Action {
    readonly type = FOLDER

    constructor (public payload) { }
}

export class ResponsesAction implements Action {
    readonly type = RESPONSES

    constructor (public payload) { }
}

export type Actions
= IsLoadingAction
| IdAction
| NameAction
| PathAction
| MethodAction
| FolderAction
| ResponsesAction
