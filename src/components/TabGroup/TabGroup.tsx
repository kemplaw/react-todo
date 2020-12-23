import styles from './TabGroup.module.css'

export default function TabGroup(props: { children: any }) {
  return <div className={styles['tab-group-wrapper']}>{props.children}</div>
}
