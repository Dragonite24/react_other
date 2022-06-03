import { usersTypes } from '../actionTypes/users'
import { UsersActions } from '../types/usersTypes'

export type UsersState = {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: TUser[]
}

type TUser = {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

const initialState: UsersState = {
  page: 0,
  per_page: 0,
  total: 0,
  total_pages: 0,
  data: []
}

export const userReducer = (state = initialState, actions: UsersActions): UsersState => {
  console.log(actions.type)

  switch (actions.type) {
    case usersTypes.FETCH_USERS_FAILURE:
      return state
    case usersTypes.FETCH_USERS_REQUEST:
      return state
    case usersTypes.FETCH_USERS_SUCCESS:
      return state

    default:
      break
  }
  return state
}
