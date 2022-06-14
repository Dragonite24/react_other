import { LoadingActions, LoadingActionTypes as type } from 'types'

export interface LoadingState {
  loading: boolean
}

const initialState: LoadingState = {
  loading: false
}

export const LoadingReducer = (state = initialState, action: LoadingActions): LoadingState => {
  switch (action.type) {
    case type.LOADING_DISABLED:
      return { loading: false }
    case type.LOADING_ENABLED:
      return {
        loading: true
      }

    default:
      return state
  }
}
