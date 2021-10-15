import React from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
// import {} from './redux/cabinetSlice'

import { Broadcasts } from '@components/Broadcasts'
import { ProfileMobile } from '@components/Profile/ProfileMobile'
import styles from './styles.module.scss'

import { testArray } from './test-data'

export const CabinetPage = () => {
  const viewCabinet = useAppSelector((state) => state.cabinet.viewCabinet)

  return (
    <div className={styles.cabinet}>
      {viewCabinet === 'purse' && <span>purse</span>}
      {viewCabinet === 'chat' && <span>chat</span>}
      {viewCabinet === 'broadcasts' && <Broadcasts data={testArray} />}
      {viewCabinet === 'profile' && <ProfileMobile />}
    </div>
  )
}
