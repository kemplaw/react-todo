import { UserInfo } from '../../../types'
import { Action } from 'redux'
import { UPDATE_USER } from '../types'

export function updateUser(
  userInfo: UserInfo
): Action<string> & {
  data: UserInfo
} {
  return {
    type: UPDATE_USER,
    data: userInfo
  }
}
