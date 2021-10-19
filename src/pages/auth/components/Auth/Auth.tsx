import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/redux/hooks'
import { authSelector } from '../../redux/auth.slice'
import styles from './styles.module.scss'

const Auth: FC = () => {
  const dispatch = useAppDispatch()

  return <form className={styles.auth}>hel</form>
}

export default Auth
