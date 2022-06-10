import { UsersActions, UsersActionTypes as type } from 'types'
import { TUser } from './types'

export interface UsersState {
  pending: boolean
  users: TUser[]
  error: string | null
}

const initialState: UsersState = {
  pending: false,
  users: [],
  error: null
}

export const userReducer = (state = initialState, action: UsersActions): UsersState => {
  console.log(action.type)

  switch (action.type) {
    case type.FETCH_USERS_FAILURE:
      return {
        ...state,
        pending: false,
        users: [],
        error: action.payload.error
      }
    case type.FETCH_USERS_REQUEST:
      return {
        ...state,
        pending: true
      }
    case type.FETCH_USERS_SUCCESS:
      return {
        ...state,
        pending: false,
        users: action.payload.users
      }
    default:
      return state
  }
}
