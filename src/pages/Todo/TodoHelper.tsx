import { useMemo } from 'react'
import { Todo, TodoStatus } from '../../types'

interface TodoHelperPropsDefine {
  todoList: Todo[]
  onClearCompleted: () => void
}

export default function TodoHelper(props: TodoHelperPropsDefine) {
  console.log('render todo helper')

  const unCompletedTodoLength = useMemo(() => {
    if (!props.todoList || !props.todoList.length) return 0

    return props.todoList.filter(todo => todo.status === TodoStatus.unCompleted).length
  }, [props.todoList])

  function handleClick() {
    props.onClearCompleted()
  }

  return (
    <div>
      <span>{unCompletedTodoLength} todo items left</span>
      <button type='button' onClick={handleClick}>
        clear
      </button>
    </div>
  )
}
