import { combineReducers } from 'redux'
import { History } from 'history'

import { loadingReducer, LoadingState, userReducer, UsersState } from 'store'

export type RootState = {
  users: UsersState
  loading: LoadingState
}

export const rootReducer = (history: History) =>
  combineReducers<RootState>({
    users: userReducer,
    loading: loadingReducer
  })
