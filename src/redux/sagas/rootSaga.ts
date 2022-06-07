import { watchClickSaga } from './users/userSaga'

export function* rootSaga() {
  yield watchClickSaga()
}
