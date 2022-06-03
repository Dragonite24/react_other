import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { History } from 'history'

import { createRootReducer } from './rootReducer'
import { rootSaga } from './rootSaga'

export const sagaMiddleware = createSagaMiddleware()

export const configureStore = (history: History) => {
  const store = createStore(
    createRootReducer(history),
    window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(sagaMiddleware))
  )

  sagaMiddleware.run(rootSaga)
  return store
}
