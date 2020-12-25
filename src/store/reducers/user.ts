import { Action } from 'redux'
import { UPDATE_USER } from '../actions/types'
export interface UserReducerState {
  username: string
  expire: number
}

export function userReducer(
  state: UserReducerState = { username: '', expire: 0 },
  actions: Action & { [key: string]: any }
): UserReducerState {
  switch (actions.type) {
    case UPDATE_USER:
      return {
        ...state,
        ...actions.data
      }
    default:
      return state
  }
}
