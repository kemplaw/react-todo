import { Todo } from '../../types'

export default function TodoItem(props: Todo) {
  return <div>{props.content}</div>
}
