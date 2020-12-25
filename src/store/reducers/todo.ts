import { Action } from 'redux'
import { Todo, TodoStatus } from '../../types'
import {
  ADD_TODO,
  FILL_TODO_LIST,
  REMOVE_COMPLETED_TODO,
  REMOVE_TODO,
  UPDATE_TODO_STATUS
} from '../actions/types'

export interface TodoReducerState {
  todoList: Todo[]
}

const initialState: TodoReducerState = {
  todoList: []
}

function updateTodoStatus(
  state: TodoReducerState,
  data: { todoId: number; todoStatus: TodoStatus }
): TodoReducerState {
  const { todoList } = state
  const todoIndex = todoList.findIndex(v => v.id === data.todoId)
  const targetTodo = todoList.find(todo => todo.id === data.todoId)

  if (!targetTodo) return state

  const newTodo: Todo = { ...targetTodo, status: data.todoStatus }
  const prevTodoList = todoList.slice(0, todoIndex)
  const nextTodoList = todoList.slice(todoIndex + 1, todoList.length)
  const resultTodoList = [...prevTodoList, newTodo, ...nextTodoList]

  return {
    todoList: resultTodoList
  }
}

function removeCompletedTodo(state: TodoReducerState): TodoReducerState {
  return {
    ...state,
    todoList: state.todoList.filter(todo => todo.status !== TodoStatus.completed)
  }
}

function removeTodo(state: TodoReducerState, todo: Todo): TodoReducerState {
  return {
    ...state,
    todoList: state.todoList.filter(v => v.id !== todo.id)
  }
}

function addTodo(state: TodoReducerState, todo: Todo): TodoReducerState {
  return {
    ...state,
    todoList: [...state.todoList, todo]
  }
}

export function todoReducer(
  state = initialState,
  actions: Action & { [key: string]: any }
): TodoReducerState {
  switch (actions.type) {
    case ADD_TODO:
      return addTodo(state, actions.todo)
    case UPDATE_TODO_STATUS:
      return updateTodoStatus(state, actions.data)
    case FILL_TODO_LIST:
      return {
        ...state,
        todoList: [...actions.todoList]
      }
    case REMOVE_COMPLETED_TODO:
      return removeCompletedTodo(state)
    case REMOVE_TODO:
      return removeTodo(state, actions.todo)
    default:
      return state
  }
}
