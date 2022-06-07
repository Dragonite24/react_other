import { combineReducers } from 'redux'
import { userReducer, UsersState } from './users/userReducer'
import { History } from 'history'

export type RootState = {
  users: UsersState
}

export const createRootReducer = (history: History) =>
  combineReducers<RootState>({
    users: userReducer
  })
