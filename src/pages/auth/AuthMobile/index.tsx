import React from 'react'
import { useAppSelector } from '@app/redux/hooks'
import useWindowSize from '../../../helpers/useWindowSizeHook'
import Styles from './styles.module.scss'

import { AuthAuthorization } from './components/AuthAuthorization'
import { AuthRegistration } from './components/AuthRegistration'

export const AuthMobile: React.FC = () => {
  const processType = useAppSelector((state) => state.authNew.processType)
  const { width } = useWindowSize()
  const desktop = width >= 769

  return (
    <div className={desktop ? `${Styles.auth}` : `${Styles.auth} ${Styles.auth_edit}`}>
      <div className={Styles.body}>
        {processType === 'authorization' && <AuthAuthorization />}
        {processType === 'registration' && <AuthRegistration />}
      </div>
    </div>
  )
}
