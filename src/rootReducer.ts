import { combineReducers } from 'redux'
import { History } from 'history'

import { userReducer, UsersState } from 'redux/users'
import { LoadingReducer, LoadingState } from 'redux/loading'

export type RootState = {
  users: UsersState
  loading: LoadingState
}

export const createRootReducer = (history: History) =>
  combineReducers<RootState>({
    users: userReducer,
    loading: LoadingReducer
  })
