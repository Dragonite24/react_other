import { LoadingActionTypes, LoadingDisabled, LoadingEnabled } from 'types'

export const loadingDisabled = (): LoadingDisabled => ({
  type: LoadingActionTypes.LOADING_DISABLED
})

export const loadingEnabled = (): LoadingEnabled => ({
  type: LoadingActionTypes.LOADING_ENABLED
})
