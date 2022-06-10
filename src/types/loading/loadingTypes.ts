export enum LoadingActionTypes {
  LOADING_ENABLED = 'LOADING_ENABLED',
  LOADING_DISABLED = 'LOADING_DISABLED'
}

export type LoadingDisabled = {
  type: typeof LoadingActionTypes.LOADING_DISABLED
}

export type LoadingEnabled = {
  type: typeof LoadingActionTypes.LOADING_ENABLED
}

export type LoadingActions = LoadingDisabled | LoadingEnabled
