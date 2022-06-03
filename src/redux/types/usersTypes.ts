import { usersTypes } from '../actionTypes/users'
import { UsersState } from '../users/reducer'

export interface FetchUsersFailure {
  type: typeof usersTypes.FETCH_USERS_FAILURE
}

export interface FetchUsersRequest {
  type: typeof usersTypes.FETCH_USERS_REQUEST
}

export interface FetchUsersSuccess {
  type: typeof usersTypes.FETCH_USERS_SUCCESS
  data: UsersState
}

export type UsersActions = FetchUsersFailure | FetchUsersRequest | FetchUsersSuccess
