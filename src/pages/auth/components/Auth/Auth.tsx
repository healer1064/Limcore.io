import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../app/redux/hooks'
import { authSelector } from '../../redux/auth.slice'
import styles from './Auth.module.scss'
import { Form } from './parts'

const Auth: FC = () => {
  const dispatch = useAppDispatch()

  return (
    <div className={styles.auth}>
      <Form />
      <Link to='#!' className={styles.authLink}>
        Зарегистрироваться
      </Link>
    </div>
  )
}

export default Auth
