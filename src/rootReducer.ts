import { combineReducers } from 'redux'
import { userReducer, UsersState } from './redux/users/reducer'
import { History } from 'history'

export type RootState = {
  users: UsersState
}

export const createRootReducer = (history: History) =>
  combineReducers<RootState>({
    users: userReducer
  })
