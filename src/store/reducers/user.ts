import { UserInfo } from '../../types'
import { Action } from 'redux'
import { UPDATE_USER } from '../actions/types'

export function userReducer(
  state: UserInfo = { username: '', expire: 0 },
  actions: Action & { [key: string]: any }
): UserInfo {
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
