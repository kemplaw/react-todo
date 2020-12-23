import { useHistory } from 'react-router-dom'
import styles from './Login.module.css'

export default function Login() {
  const history = useHistory()

  const handleValidate = () => {
    history.push('/app')
  }

  return (
    <form action='' className={styles['form-wrapper']}>
      <div className={styles['form-group']}>
        <label className={styles.label}>username : </label>
        <input type='text' className={styles['form-control']} placeholder='username' />
      </div>
      <div className={styles['form-group']}>
        <label className={styles.label}>password : </label>
        <input type='password' className={styles['form-control']} placeholder='password' />
      </div>

      <button type='button' className={styles.button} onClick={handleValidate}>
        login
      </button>
    </form>
  )
}
