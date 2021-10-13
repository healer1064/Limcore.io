import React from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
// import {} from './redux/cabinetSlice'
import Styles from './styles.module.scss'

import { ProfileMobile } from '@components/Profile/ProfileMobile'

export const CabinetPage = () => {
  const viewCabinet = useAppSelector((state) => state.cabinet.viewCabinet)

  return (
    <div className={Styles.cabinet}>
      {viewCabinet === 'purse' && <span>purse</span>}
      {viewCabinet === 'chat' && <span>chat</span>}
      {viewCabinet === 'broadcasts' && <span>broadcasts</span>}
      {viewCabinet === 'profile' && <ProfileMobile />}
    </div>
  )
}
