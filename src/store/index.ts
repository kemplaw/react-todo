import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { todoReducer, userReducer } from './reducers'

export default createStore(
  combineReducers({
    todoReducer,
    userReducer
  }),
  applyMiddleware(thunk, logger)
)
