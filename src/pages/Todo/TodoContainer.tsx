import { Dispatch } from 'react'
import { connect } from 'react-redux'
import TodoApp from './index'
import {
  fetchTodoList,
  updateTodo,
  removeTodo,
  addTodo,
  removeCompletedTodo
} from '../../store/actions/creators'
import { Todo } from '../../types'

function mapStateToProps(state: any) {
  return {
    todoList: state.todoReducer.todoList
  }
}

function mapDisPatchToProps(dispatch: Dispatch<any>) {
  return {
    addTodo: (todo: Todo) => dispatch(addTodo(todo)),
    removeTodo: (id: number) => dispatch(removeTodo(id)),
    updateTodo: (todo: Todo) => dispatch(updateTodo(todo)),
    fetchTodoList,
    removeCompletedTodo
  }
}

export default connect(mapStateToProps, mapDisPatchToProps)(TodoApp)
