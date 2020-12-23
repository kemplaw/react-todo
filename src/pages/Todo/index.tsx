import { TabItem } from '../../components/TabGroup'
import TabGroup from '../../components/TabGroup/TabGroup'
import { Tab, TabFilterStatus, Todo } from '../../types'
import TodoHelper from './TodoHelper'
import TodoItem from './TodoItem'
import styles from './Todo.module.css'
import TodoInput from './TodoInput'

export default function TodoContainer() {
  console.log('render')

  const tabs: Tab[] = [
    { id: TabFilterStatus.all, label: 'all' },
    { id: TabFilterStatus.active, label: 'active' },
    { id: TabFilterStatus.completed, label: 'completed' }
  ]
  const handleAddTodo = (e: any) => {
    console.log(e)
  }
  const handleClearAllCompletedTodo = () => {
    console.log('clear')
  }

  return (
    <div className={styles['todo-wrapper']}>
      <TabGroup>
        {tabs.map(tab => (
          <TabItem key={tab.id} label={tab.label} />
        ))}
      </TabGroup>

      <TodoInput placeholder='press enter to add todo' onEnter={handleAddTodo} />

      <TodoItem />

      <TodoHelper todoList={[] as Todo[]} onClearAllCompletedTodo={handleClearAllCompletedTodo} />
    </div>
  )
}
