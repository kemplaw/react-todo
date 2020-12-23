export enum TodoStatus {
  completed = 1,
  unCompleted = 2
}

export interface Todo {
  id: any
  userId: any
  content: string
  status: TodoStatus
}

export interface Tab {
  id: any
  label: string
}

export enum TabFilterStatus {
  all = 1,
  active = 2,
  completed = 3
}
