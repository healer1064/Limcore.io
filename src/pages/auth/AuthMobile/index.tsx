import React from 'react'
// import { Link } from 'react-router-dom'
import { useAppSelector } from '@app/redux/hooks'
import Styles from './styles.module.scss'

import { AuthAuthorization } from './components/AuthAuthorization'
import { AuthRegistration } from './components/AuthRegistration'

// import limcoreIcon from '@icons/logo.svg'

export const AuthMobile: React.FC = () => {
  const processType = useAppSelector((state) => state.authNew.processType)

  return (
    <div className={Styles.auth}>
      {/* <div className={Styles.header}>
        <img src={limcoreIcon} alt='Logo' />
        <Link to='/'>
          <button className={Styles.close}>{}</button>
        </Link>
      </div> */}
      <div className={Styles.body}>
        {processType === 'authorization' && <AuthAuthorization />}
        {processType === 'registration' && <AuthRegistration />}
      </div>
    </div>
  )
}
