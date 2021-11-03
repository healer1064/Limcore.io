import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { Process, Auth } from './constants'
import { useAppDispatch, useAppSelector } from '../../../../app/redux/hooks'
import { authSelector, setProcessType, setAuthStep } from '../../redux/auth.slice'
import styles from './Auth.module.scss'
import { Form, List } from './parts'
import useWindowSize from '@helpers/useWindowSizeHook'

const AuthComponent: FC = () => {
  const dispatch = useAppDispatch()
  const auth = useAppSelector(authSelector)

  const { width } = useWindowSize()
  const desktop = width >= 768

  return (
    <div className={classNames(styles.auth, { [styles.authOffsetBottom]: auth.authStep !== Auth.Step1 })}>
      {auth.processType === Process.Registration && <List />}
      <div className={desktop ? classNames(styles.authInner, styles.authInnerDesktop) : styles.authInner}>
        <Form />
      </div>
      {auth.authStep === Auth.Step1 && (
        <Link
          to='#!'
          className={styles.authLink}
          onClick={() => {
            dispatch(setProcessType(Process.Registration))
            dispatch(setAuthStep(Auth.Step1))
          }}
        >
          {auth.authStep === Auth.Step1
            ? Process.Authorization
              ? 'Зарегистрироваться'
              : Process.Registration
              ? 'Войти'
              : null
            : null}
        </Link>
      )}
    </div>
  )
}

export default AuthComponent
