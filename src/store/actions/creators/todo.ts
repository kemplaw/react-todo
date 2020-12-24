import { Todo } from '../../../types'
import { Dispatch } from 'react'
import { Action, ActionCreator } from 'redux'
import { FILL_TODO_LIST, REMOVE_COMPLETED_TODO, REMOVE_TODO, UPDATE_TODO, ADD_TODO } from '../types'

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

export function updateTodo(todo: Todo): Action<string> & { todo: Todo } {
  return {
    type: UPDATE_TODO,
    todo
  }
}

function fillTodoList(todoList: Todo[]): Action<string> & { todoList: Todo[] } {
  return {
    type: FILL_TODO_LIST,
    todoList
  }
}

export function fetchTodoList() {
  return (dispatch: Dispatch<Action & { todoList: Todo[] }>) => {
    dispatch(fillTodoList([]))
  }
}

export const removeTodo: ActionCreator<Action> = (todoId: number) => ({ type: REMOVE_TODO, todoId })

export const removeCompletedTodo: ActionCreator<Action> = () => ({ type: REMOVE_COMPLETED_TODO })
