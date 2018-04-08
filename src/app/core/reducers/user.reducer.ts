import { Action, ActionReducer } from '@ngrx/store'
import * as userAction from '../actions/user.action'

export interface State {
    id: string
    firstname: string
    lastname: string
    email: string
    picture: string
    isAdmin: boolean
}

const initialState: State = {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    picture: '',
    isAdmin: false
}

export function reducer (state = initialState, action: userAction.Actions): State {
    switch (action.type) {
        case userAction.USER:
            return action.payload
        case userAction.ID:
            return {
                ...state,
                id: action.payload
            }
        case userAction.FIRSTNAME:
            return {
                ...state,
                firstname: action.payload
            }
        case userAction.LASTNAME:
            return {
                ...state,
                lastname: action.payload
            }
        case userAction.EMAIL:
            return {
                ...state,
                email: action.payload
            }
        case userAction.PICTURE:
            return {
                ...state,
                picture: action.payload
            }
        case userAction.ISADMIN:
            return {
                ...state,
                isAdmin: action.payload
            }
        default:
            return state
    }
}

export const getId = (state: State) => state.id
export const getFirstname = (state: State) => state.firstname
export const getLastname = (state: State) => state.lastname
export const getEmail = (state: State) => state.email
export const getPicture = (state: State) => state.picture
export const getIsAdmin = (state: State) => state.isAdmin
export const getAll = (state: State) => state
