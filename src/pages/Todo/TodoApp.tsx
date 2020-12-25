import { useEffect, useMemo, useState } from 'react'
import { TabItem } from '../../components/TabGroup'
import TabGroup from '../../components/TabGroup/TabGroup'
import { Tab, TabFilterStatus, Todo, TodoStatus } from '../../types'
import TodoHelper from './TodoHelper'
import TodoItem from './TodoItem'
import styles from './Todo.module.css'
import TodoInput from './TodoInput'

export default function TodoApp(props: any) {
  console.log('render')
  console.log(props)

  const [tabFilterStatus, setTabFilterStatus] = useState(TabFilterStatus.all)
  const tabs: Tab[] = [
    { id: TabFilterStatus.all, label: 'all' },
    { id: TabFilterStatus.active, label: 'active' },
    { id: TabFilterStatus.completed, label: 'completed' }
  ]

  const filteredTodoList = useMemo(() => {
    return props.todoList.filter((todo: Todo) => {
      if (tabFilterStatus === TabFilterStatus.all) return true

      if (tabFilterStatus === TabFilterStatus.active) {
        return todo.status === TodoStatus.unCompleted
      }

      return todo.status === TodoStatus.completed
    })
  }, [props.todoList, tabFilterStatus])

  function handleAddTodo(value: any) {
    if (!value) return

    const todo: Todo = {
      id: 0,
      content: value,
      status: TodoStatus.unCompleted,
      userId: 1
    }
    props.addTodo(todo)
  }

  function handleChangeTabFilter(tabFilter: TabFilterStatus) {
    setTabFilterStatus(tabFilter)
  }

  useEffect(() => {
    props.fetchTodoList()
    // eslint-disable-next-line
  }, [])

  return (
    <div className={styles['todo-wrapper']}>
      <TabGroup onChange={handleChangeTabFilter}>
        {tabs.map(tab => (
          <TabItem key={tab.id} label={tab.label} tabStatus={tab.id} />
        ))}
      </TabGroup>

      <TodoInput placeholder='press enter to add todo' onEnter={handleAddTodo} />

      {filteredTodoList.map((todo: any) => (
        <TodoItem key={todo.id} todo={todo} onToggle={props.updateTodoStatus} />
      ))}

      <TodoHelper todoList={props.todoList} onClearCompleted={props.removeCompletedTodo} />
    </div>
  )
}
