import { applyMiddleware, createStore } from 'redux'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import { History } from 'history'

import { rootReducer, RootState } from './rootReducer'
import { RootActions } from 'types'

export const rootStore = (history: History) => {
  const store = createStore(
    rootReducer(history),
    window &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        applyMiddleware(thunk as ThunkMiddleware<RootState, RootActions>)
      )
  )

  return store
}
