import { all, fork } from 'redux-saga/effects'
import { usersWatchers } from 'redux/users/watchers'

const watchers = [...usersWatchers]

export function* rootSaga() {
  yield all(watchers.map(fork))
}
