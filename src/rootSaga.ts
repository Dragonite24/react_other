import { all, fork } from 'redux-saga/effects'
import { usersWatchers } from 'store'

const watchers = [...usersWatchers]

export function* rootSaga() {
  yield all(watchers.map(fork))
}
