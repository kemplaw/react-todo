import { Dispatch } from 'react'
import { Action, ActionCreator } from 'redux'
import { Todo, TodoStatus } from '../../../types'
import {
  FILL_TODO_LIST,
  REMOVE_COMPLETED_TODO,
  REMOVE_TODO,
  UPDATE_TODO_STATUS,
  ADD_TODO
} from '../types'

let todoId = 1

export function addTodo(todo: Todo): Action<string> & { todo: Todo } {
  return {
    type: ADD_TODO,
    todo: {
      ...todo,
      id: todoId++
    }
  }
}

export function updateTodoStatus(
  todoId: number,
  todoStatus: TodoStatus
): Action<string> & { data: { todoId: number; todoStatus: TodoStatus } } {
  return {
    type: UPDATE_TODO_STATUS,
    data: { todoId, todoStatus }
  }
}

function fillTodoList(todoList: Todo[]): Action<string> & { todoList: Todo[] } {
  return {
    type: FILL_TODO_LIST,
    todoList
  }
}

export function fetchTodoList() {
  return (dispatch: Dispatch<Action<string> & { todoList: Todo[] }>) => {
    setTimeout(() => {
      dispatch(fillTodoList([]))
    }, 500)
  }
}

export const removeTodo: ActionCreator<Action> = (todoId: number) => ({ type: REMOVE_TODO, todoId })

export function removeCompletedTodo(dispatch: Dispatch<Action<string>>) {
  return dispatch({ type: REMOVE_COMPLETED_TODO })
}
