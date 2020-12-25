import { Redirect, Route } from 'react-router-dom'
import { store } from '../store'
import { UserReducerState } from '../store/reducers'

interface AuthRoutePropsDefine {
  children: any
  [key: string]: any
}

export default function AuthRoute(props: AuthRoutePropsDefine) {
  const { children, ...rest } = props
  const { username }: UserReducerState = store.getState().user

  return <Route {...rest} render={() => (username ? children : <Redirect to='/login' />)} />
}
