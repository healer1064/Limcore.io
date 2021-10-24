import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Process, Auth } from './constants'
import { useAppDispatch, useAppSelector } from '../../../../app/redux/hooks'
import { authSelector, setProcessType } from '../../redux/auth.slice'
import styles from './Auth.module.scss'
import { Form, List } from './parts'

const AuthComponent: FC = () => {
  const dispatch = useAppDispatch()
  const auth = useAppSelector(authSelector)

  return (
    <div className={styles.auth}>
      {auth.processType === Process.Registration && <List />}
      <div className={styles.authInner}>
        <Form />
      </div>
      {(auth.processType === Process.Authorization ||
        (auth.processType === Process.Registration && auth.authStep === Auth.Step1)) && (
        <Link to='#!' className={styles.authLink} onClick={() => dispatch(setProcessType(Process.Registration))}>
          {auth.processType === Process.Authorization ? 'Зарегистрироваться' : 'Войти'}
        </Link>
      )}
    </div>
  )
}

export default AuthComponent
