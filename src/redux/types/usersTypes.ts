import { TUser, usersActionTypes } from 'redux/actionTypes'

export interface FetchUsersSuccessPayload {
  users: TUser[]
}

export interface FetchUsersFailurePayload {
  error: string
}

export type FetchUsersFailure = {
  type: typeof usersActionTypes.FETCH_USERS_FAILURE
  payload: FetchUsersFailurePayload
}

export type FetchUsersRequest = {
  type: typeof usersActionTypes.FETCH_USERS_REQUEST
}

export type FetchUsersSuccess = {
  type: typeof usersActionTypes.FETCH_USERS_SUCCESS
  payload: FetchUsersSuccessPayload
}

export type UsersActions = FetchUsersFailure | FetchUsersRequest | FetchUsersSuccess
