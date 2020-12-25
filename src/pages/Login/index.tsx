import { Dispatch } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Action } from 'redux'
import { updateUser } from '../../store/actions/creators'
import { UserReducerState } from '../../store/reducers'
import styles from './Login.module.css'

function Login({ dispatch }: { dispatch: Dispatch<Action<string> & { data: UserReducerState }> }) {
  const history = useHistory()

  const handleValidate = () => {
    dispatch(updateUser({ username: 'kemp', expire: Date.now() + 3600 * 1000 * 7 * 24 }))
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

export default connect()(Login)
