import { TUser } from 'store'

export enum UsersActionTypes {
  FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'
}

export interface FetchUsersSuccessPayload {
  users: TUser[]
}

export interface FetchUsersFailurePayload {
  error: string
}

export type FetchUsersFailure = {
  type: typeof UsersActionTypes.FETCH_USERS_FAILURE
  payload: FetchUsersFailurePayload
}

export type FetchUsersRequest = {
  type: typeof UsersActionTypes.FETCH_USERS_REQUEST
}

export type FetchUsersSuccess = {
  type: typeof UsersActionTypes.FETCH_USERS_SUCCESS
  payload: FetchUsersSuccessPayload
}

export type UsersActions = FetchUsersFailure | FetchUsersRequest | FetchUsersSuccess
