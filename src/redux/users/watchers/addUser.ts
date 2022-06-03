import { takeEvery } from 'redux-saga/effects'

export type TUsers = {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: TUser[]
}

type TUser = {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

const getUsers = async () => {
  const request = await fetch('https://reqres.in/api/users')
  const data: TUsers = await request.json()
  return data
}
export function* workerSaga() {
  const users: TUsers = yield getUsers()
  console.log(users)
}

export function* watchClickSaga() {
  yield takeEvery('CLICK', workerSaga)
}
