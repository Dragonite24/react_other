import { all, call, put, takeLatest } from 'redux-saga/effects'
import { fetchUsersFailure, fetchUsersSuccess } from 'redux/actions'
import { TUsers, usersActionTypes } from 'redux/actionTypes'

async function getUsers(): Promise<TUsers> {
  const response = await fetch('https://reqres.in/api/users')
  return response.json()
}

export function* fetchUsersSaga() {
  try {
    const responseData: TUsers = yield call(getUsers)

    yield put(fetchUsersSuccess({ users: responseData.data }))
  } catch (e) {
    yield put(
      fetchUsersFailure({
        error: 'Error'
      })
    )
  }
}

export function* watchClickSaga() {
  yield all([takeLatest(usersActionTypes.FETCH_USERS_REQUEST, fetchUsersSaga)])
}
