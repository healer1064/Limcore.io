import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { Process, Auth } from './constants'
import { useAppDispatch, useAppSelector } from '../../../../app/redux/hooks'
import { authSelector, setProcessType, setAuthStep } from '../../redux/auth.slice'
import styles from './Auth.module.scss'
import { Form, List } from './parts'
import useWindowSize from '@helpers/useWindowSizeHook'
import { AuthMobile } from '../../../../pages/auth/AuthMobile'

const AuthComponent: FC = () => {
  const dispatch = useAppDispatch()
  const auth = useAppSelector(authSelector)
  const process = useAppSelector((state) => state.auth.processType)

  const { width } = useWindowSize()
  const desktop = width >= 768

  return <AuthMobile />

  return (
    <div className={classNames(styles.auth, { [styles.authOffsetBottom]: auth.authStep !== Auth.Step1 })}>
      {auth.processType === Process.Registration && <List />}
      <div className={desktop ? classNames(styles.authInner, styles.authInnerDesktop) : styles.authInner}>
        {/* <Form /> */}
        <AuthMobile />
      </div>
    </div>
  )
}

export default AuthComponent
