import React from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
// import {} from './redux/cabinetSlice'

import { Broadcasts } from '@components/Broadcasts'
import { ProfileMobile } from '@components/Profile/ProfileMobile'
import styles from './styles.module.scss'
import * as testImages from '../../assets/images/test'

const testArray = [
  {
    id: 1,
    title: 'Ремонт здания',
    source: 'Камера №1',
    video: '',
    preview: testImages.video1,
  },
  {
    i: 2,
    title: 'Ремонт здания',
    source: 'Камера №2',
    video: '',
    preview: testImages.video2,
  },
  {
    id: 3,
    title: 'Ремонт прилегающей территории',
    source: 'Камера №3',
    video: '',
    preview: testImages.video3,
  },
  {
    id: 4,
    title: 'Ремонт прилегающей территории',
    source: 'Камера №4',
    video: '',
    preview: testImages.video4,
  },
]

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
