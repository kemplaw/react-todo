import { TabItem } from '../../components/TabGroup'
import TabGroup from '../../components/TabGroup/TabGroup'
import { Tab, TabFilterStatus, Todo, TodoStatus } from '../../types'
import TodoHelper from './TodoHelper'
import TodoItem from './TodoItem'
import styles from './Todo.module.css'
import TodoInput from './TodoInput'

export default function TodoApp(props: any) {
  console.log('render')

  const tabs: Tab[] = [
    { id: TabFilterStatus.all, label: 'all' },
    { id: TabFilterStatus.active, label: 'active' },
    { id: TabFilterStatus.completed, label: 'completed' }
  ]
  const handleAddTodo = (value: any) => {
    const todo: Todo = {
      id: 0,
      content: value,
      status: TodoStatus.unCompleted,
      userId: 1
    }
    props.addTodo(todo)
  }

  return (
    <div className={styles['todo-wrapper']}>
      <TabGroup>
        {tabs.map(tab => (
          <TabItem key={tab.id} label={tab.label} />
        ))}
      </TabGroup>

      <TodoInput placeholder='press enter to add todo' onEnter={handleAddTodo} />

      {props.todoList.map((todo: any) => (
        <TodoItem {...todo} key={todo.id} />
      ))}

      <TodoHelper todoList={[] as Todo[]} onClearAllCompletedTodo={props.removeCompletedTodo} />
    </div>
  )
}
