import { Action } from 'redux'
import { UserReducerState } from '../../reducers'
import { UPDATE_USER } from '../types'

export function updateUser(
  userInfo: UserReducerState
): Action<string> & {
  data: UserReducerState
} {
  return {
    type: UPDATE_USER,
    data: userInfo
  }
}
