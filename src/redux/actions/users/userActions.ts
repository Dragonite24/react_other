import { usersActionTypes } from '../../actionTypes/users'
import {
  FetchUsersFailure,
  FetchUsersFailurePayload,
  FetchUsersRequest,
  FetchUsersSuccess,
  FetchUsersSuccessPayload
} from '../../types/usersTypes'

export const fetchUsersRequest = (): FetchUsersRequest => ({
  type: usersActionTypes.FETCH_USERS_REQUEST
})

export const fetchUsersSuccess = (payload: FetchUsersSuccessPayload): FetchUsersSuccess => ({
  type: usersActionTypes.FETCH_USERS_SUCCESS,
  payload
})

export const fetchUsersFailure = (payload: FetchUsersFailurePayload): FetchUsersFailure => ({
  type: usersActionTypes.FETCH_USERS_FAILURE,
  payload
})
