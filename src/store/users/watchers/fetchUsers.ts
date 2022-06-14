import { all, call, put, takeLatest } from 'redux-saga/effects'

import { UsersActionTypes } from 'types/users/usersTypes'

import { TUsers } from '../types'
import * as actions from '../actions'

async function getUsers(): Promise<TUsers> {
  const response = await fetch('https://reqres.in/api/users')
  return response.json()
}

function* worker() {
  try {
    const responseData: TUsers = yield call(getUsers)

    yield put(actions.fetchUsersSuccess({ users: responseData.data }))
  } catch (e) {
    yield put(
      actions.fetchUsersFailure({
        error: 'Error'
      })
    )
  }
}

export function* fetchUsersWatcher() {
  yield all([takeLatest(actions.fetchUsersRequest, worker)])
}
