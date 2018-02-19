import { Action } from '@ngrx/store'

export const PROJECT = '[Project] Project'
export const ID = '[Project] Id'
export const NAME = '[Project] Name'
export const STATUS = '[Project] Status'
export const DESCRIPTION = '[Project] Description'
export const REPOSITORY = '[Project] Repository'
export const ENVIRONMENTS = '[Project] Environments'

export class ProjectAction implements Action {
    readonly type = PROJECT

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

export class StatusAction implements Action {
    readonly type = STATUS

    constructor (public payload) { }
}

export class DescriptionAction implements Action {
    readonly type = DESCRIPTION

    constructor (public payload) { }
}

export class RepositoryAction implements Action {
    readonly type = REPOSITORY

    constructor (public payload) { }
}

export class EnvironmentsAction implements Action {
    readonly type = ENVIRONMENTS

    constructor (public payload) { }
}

export type Actions
= ProjectAction
| IdAction
| NameAction
| StatusAction
| DescriptionAction
| RepositoryAction
| EnvironmentsAction
