export interface UsersState {
  users: string[]
}

const initialState: UsersState = {
  users: []
}
export const userReducer = (state = initialState): UsersState => {
  return state
}
