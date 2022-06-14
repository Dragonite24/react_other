import { all, call, put, takeLatest } from 'redux-saga/effects'

import { UsersActionTypes } from 'types'
import { loadingDisabled, loadingEnabled } from 'store/loading/actions'

import { TUsers } from '../types'
import * as actions from '../actions'

async function getUsers(): Promise<TUsers> {
  const response = await fetch('https://reqres.in/api/users')
  return response.json()
}

function* worker() {
  try {
    yield put(loadingEnabled())
    const responseData: TUsers = yield call(getUsers)

    yield put(actions.fetchUsersSuccess({ users: responseData.data }))
    yield put(loadingDisabled())
  } catch (e) {
    yield put(
      actions.fetchUsersFailure({
        error: 'Error'
      })
    )
    yield put(loadingDisabled())
  }
}

export function* fetchUsersWatcher() {
  yield all([takeLatest(UsersActionTypes.FETCH_USERS_REQUEST, worker)])
}
