import { watchClickSaga } from './redux/users/watchers/addUser'

export function* rootSaga() {
  yield watchClickSaga()
}
