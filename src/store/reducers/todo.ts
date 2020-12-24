import { Action } from 'redux'
import { Todo, TodoStatus } from '../../types'
import {
  ADD_TODO,
  FILL_TODO_LIST,
  REMOVE_COMPLETED_TODO,
  REMOVE_TODO,
  UPDATE_TODO
} from '../actions/types'

export interface TodoStateDefine {
  todoList: Todo[]
}

const initialState: TodoStateDefine = {
  todoList: []
}

function updateTodo({ todoList }: TodoStateDefine, todo: Todo): TodoStateDefine {
  const todoIndex = todoList.findIndex(v => v.id === todo.id)
  const prevTodoList = todoList.slice(0, todoIndex)
  const nextTodoList = todoList.slice(todoIndex, todoList.length - 1)
  const resultTodoList = [...prevTodoList, todo, ...nextTodoList]

  return {
    todoList: resultTodoList
  }
}

function removeCompletedTodo(state: TodoStateDefine): TodoStateDefine {
  return {
    ...state,
    todoList: state.todoList.filter(todo => todo.status !== TodoStatus.completed)
  }
}

function removeTodo(state: TodoStateDefine, todo: Todo): TodoStateDefine {
  return {
    ...state,
    todoList: state.todoList.filter(v => v.id !== todo.id)
  }
}

function addTodo(state: TodoStateDefine, todo: Todo) {
  return {
    ...state,
    todoList: [...state.todoList, todo]
  }
}

export function todoReducer(
  state = initialState,
  actions: Action & { [key: string]: any }
): TodoStateDefine {
  switch (actions.type) {
    case ADD_TODO:
      return addTodo(state, actions.todo)
    case UPDATE_TODO:
      return updateTodo(state, actions.todo)
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
