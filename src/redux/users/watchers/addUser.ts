import { takeEvery } from 'redux-saga/effects'
import { UsersState } from '../reducer'

const getUsers = async () => {
  const request = await fetch('https://reqres.in/api/users')
  const data: UsersState = await request.json()
  return data
}
export function* workerSaga() {
  const users: UsersState = yield getUsers()
  console.log(users)
}

export function* watchClickSaga() {
  yield takeEvery('CLICK', workerSaga)
}
