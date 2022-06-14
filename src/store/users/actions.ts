import {
  FetchUsersFailure,
  FetchUsersFailurePayload,
  FetchUsersRequest,
  FetchUsersSuccess,
  FetchUsersSuccessPayload,
  UsersActionTypes
} from '../../types/users/usersTypes'

export const fetchUsersRequest = (): FetchUsersRequest => ({
  type: UsersActionTypes.FETCH_USERS_REQUEST
})

export const fetchUsersSuccess = (payload: FetchUsersSuccessPayload): FetchUsersSuccess => ({
  type: UsersActionTypes.FETCH_USERS_SUCCESS,
  payload
})

export const fetchUsersFailure = (payload: FetchUsersFailurePayload): FetchUsersFailure => ({
  type: UsersActionTypes.FETCH_USERS_FAILURE,
  payload
})
