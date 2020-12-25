import { useMemo } from 'react'
import { Todo, TodoStatus } from '../../types'

export interface TodoItemPropsDefine {
  todo: Todo
  onToggle: (todoId: number, todoStatus: TodoStatus) => void
}

export default function TodoItem({ todo, onToggle }: TodoItemPropsDefine) {
  const willUpdatedTodoStatus = useMemo(
    () => (todo.status === TodoStatus.completed ? TodoStatus.unCompleted : TodoStatus.completed),
    [todo]
  )
  function handleChange() {
    onToggle(todo.id, willUpdatedTodoStatus)
  }

  return (
    <div>
      <input
        type='checkbox'
        checked={todo.status === TodoStatus.completed}
        onChange={handleChange}
      />
      <span>{todo.content}</span>
    </div>
  )
}
