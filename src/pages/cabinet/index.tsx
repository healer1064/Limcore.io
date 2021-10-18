import React from 'react'
import { useAppSelector } from '@app/redux/hooks'

import { BroadcastsMobile } from '@components/Broadcasts/BroadcastsMobile'
import { ProfileMobile } from '@components/Profile/ProfileMobile'
import { PurseMobile } from '@components/Purse/PurseMobile'
import styles from './styles.module.scss'

import { testArray } from './test-data'

export const CabinetPage: React.FC = () => {
  const viewCabinet = useAppSelector((state) => state.cabinet.viewCabinet)

  return (
    <div className={styles.cabinet}>
      {viewCabinet === 'purse' && <PurseMobile />}
      {viewCabinet === 'chat' && <span>chat</span>}
      {viewCabinet === 'broadcasts' && <BroadcastsMobile data={testArray} />}
      {viewCabinet === 'profile' && <ProfileMobile />}
    </div>
  )
}
