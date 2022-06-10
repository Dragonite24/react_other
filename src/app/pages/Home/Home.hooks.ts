import { useSelector } from 'react-redux'
import { RootState } from 'rootReducer'

export const useHome = () => {
  const { pending, users, error } = useSelector((state: RootState) => state.users)

  return {
    pending,
    users,
    error
  }
}
