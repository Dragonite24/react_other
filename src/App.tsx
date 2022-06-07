import { useDispatch, useSelector } from 'react-redux'
import { fetchUsersRequest } from 'redux/actions'

import { RootState } from './redux/reducers/rootReducer'

export const App: React.FC = () => {
  const { pending, users, error } = useSelector((state: RootState) => state.users)
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(fetchUsersRequest())}>Click</button>
      <div>Users: {users.map((el) => el.first_name)}</div>
    </div>
  )
}
