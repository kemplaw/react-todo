import { Dispatch } from 'react'
import { connect } from 'react-redux'
import TodoApp from './TodoApp'
import {
  fetchTodoList,
  removeTodo,
  addTodo,
  removeCompletedTodo,
  updateTodoStatus
} from '../../store/actions/creators'
import { Todo, TodoStatus } from '../../types'
import { RootState } from '../../store'

function mapStateToProps(state: RootState) {
  return {
    user: state.user,
    todoList: state.todo.todoList
  }
}

function mapDisPatchToProps(dispatch: Dispatch<any>) {
  return {
    addTodo: (todo: Todo) => dispatch(addTodo(todo)),
    removeTodo: (id: number) => dispatch(removeTodo(id)),
    updateTodoStatus: (todoId: number, todoStatus: TodoStatus) =>
      dispatch(updateTodoStatus(todoId, todoStatus)),
    fetchTodoList: () => dispatch(fetchTodoList()),
    removeCompletedTodo: () => dispatch(removeCompletedTodo)
  }
}

export default connect(mapStateToProps, mapDisPatchToProps)(TodoApp)
