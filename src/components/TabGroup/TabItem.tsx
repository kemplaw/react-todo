interface TabItemPropsDefine {
  label?: string
  children?: any
}

export default function TabItem(props: TabItemPropsDefine) {
  return <div>{props.label ? props.label : props.children || null}</div>
}
