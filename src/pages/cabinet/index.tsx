import React from 'react'
import { useAppSelector } from '@app/redux/hooks'

import { ProfileMobile } from '@components/Profile/ProfileMobile'
import { PurseMobile } from '@components/Purse/PurseMobile'
import styles from './styles.module.scss'

export const CabinetPage: React.FC = () => {
  const viewCabinet = useAppSelector((state) => state.cabinet.viewCabinet)

  return (
    <div className={styles.cabinet}>
      {viewCabinet === 'profile' && <PurseMobile />}
      {viewCabinet === 'chat' && <span>chat</span>}
      {viewCabinet === 'profile' && <ProfileMobile />}
    </div>
  )
}
