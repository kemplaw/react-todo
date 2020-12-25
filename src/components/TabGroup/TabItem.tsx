import { useContext } from 'react'
import { TabFilterStatus } from '../../types'
import { TabGroupProvider } from './TabGroup'

interface TabItemPropsDefine {
  tabStatus: TabFilterStatus
  label?: string
  children?: any
}

export default function TabItem(props: TabItemPropsDefine) {
  const tabGroupContext = useContext(TabGroupProvider)

  const handleClick = () => {
    tabGroupContext.onChange && tabGroupContext.onChange(props.tabStatus)
  }

  return (
    <div style={{ cursor: 'pointer' }} onClick={handleClick}>
      {props.label ? props.label : props.children || null}
    </div>
  )
}
