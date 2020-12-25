import { createContext } from 'react'
import { TabFilterStatus } from '../../types'
import styles from './TabGroup.module.css'

export const TabGroupProvider = createContext<{ onChange?: (tabStatus: TabFilterStatus) => void }>(
  {}
)

export default function TabGroup(props: {
  children: any
  onChange: (tabFilter: TabFilterStatus) => void
}) {
  return (
    <TabGroupProvider.Provider value={{ onChange: props.onChange }}>
      <div className={styles['tab-group-wrapper']}>{props.children}</div>
    </TabGroupProvider.Provider>
  )
}
