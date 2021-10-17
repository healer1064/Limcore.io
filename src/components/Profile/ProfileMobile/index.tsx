import React from 'react'
import { useAppSelector } from '@app/redux/hooks'
import Styles from './styles.module.scss'

import { Profile } from './components/Profile'
import { ProfileFilling } from './components/ProfileFilling'
import { ProfileComplete } from './components/ProfileComplete'
import { EditPhone } from './components/EditPhone'
import { EditEmail } from './components/EditEmail'
import { EditName } from './components/EditName'
import { EditLocation } from './components/EditLocation'
import { AddAuth } from './components/AddAuth'

export const ProfileMobile: React.FC = () => {
  const viewContent = useAppSelector((state) => state.cabinet.viewContent)

  return (
    <div className={Styles.profile}>
      {viewContent === 'profile' && <Profile />}
      {viewContent === 'filling' && <ProfileFilling />}
      {viewContent === 'complete' && <ProfileComplete />}
      {viewContent === 'editPhone' && <EditPhone />}
      {viewContent === 'editEmail' && <EditEmail />}
      {viewContent === 'editName' && <EditName />}
      {viewContent === 'editLocation' && <EditLocation />}
      {viewContent === 'addAuth' && <AddAuth />}
    </div>
  )
}
