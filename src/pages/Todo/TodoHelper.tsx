import { memo, useCallback, useMemo } from 'react'
import { Todo, TodoStatus } from '../../types'

interface TodoHelperPropsDefine {
  todoList: Todo[]
  onClearCompleted: () => void
}

export default memo(function TodoHelper({ onClearCompleted, todoList }: TodoHelperPropsDefine) {
  console.log('render todo helper')

  const unCompletedTodoLength = useMemo(() => {
    if (!todoList || !todoList.length) return 0

    return todoList.filter(todo => todo.status === TodoStatus.unCompleted).length
  }, [todoList])

  const handleClick = useCallback(() => {
    onClearCompleted()
  }, [onClearCompleted])

  return (
    <div>
      <span>{unCompletedTodoLength} todo items left</span>
      <button type='button' onClick={handleClick}>
        clear
      </button>
    </div>
  )
})
