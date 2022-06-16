import { Dispatch } from 'react'
import { Action } from 'redux'

import { loadingEnabled } from 'store/loading/actions'

import {
  FetchUsersFailure,
  FetchUsersFailurePayload,
  FetchUsersRequest,
  FetchUsersSuccess,
  FetchUsersSuccessPayload,
  UsersActionTypes
} from 'types'

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

export const getUsersThunkCreator = () => async (dispatch: Dispatch<Action>) => {
  dispatch(fetchUsersRequest())
  dispatch(loadingEnabled())
  console.log(1)
}
