import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setProfileComplete, changeViewContent } from '../../../pages/cabinet/redux/cabinetSlice'
import Styles from './styles.module.scss'

import { Container } from '@components/Container'
import { Profile } from './components/Profile'
import { ProfileFilling } from './components/ProfileFilling'
import { ProfileComplete } from './components/ProfileComplete'
import { EditPhone } from './components/EditPhone'
import { EditEmail } from './components/EditEmail'
import { EditName } from './components/EditName'
import { EditLocation } from './components/EditLocation'
import { AddAuth } from './components/AddAuth'

export const ProfileMobile: React.FC = () => {
  const dispatch = useAppDispatch()
  const userData = useAppSelector((state) => state.user.userData)
  const profileComplete = useAppSelector((state) => state.cabinet.profileComplete)
  const viewContent = useAppSelector((state) => state.cabinet.viewContent)

  const handleFillingClick = () => {
    dispatch(changeViewContent('none'))
  }

  useEffect(() => {
    if (userData !== null) {
      dispatch(setProfileComplete(true))
    }
  }, [userData])

  return (
    <div className={Styles.profile}>
      {profileComplete ? <ProfileComplete /> : <Profile />}
      <>
        {viewContent === 'filling' && (
          <Container title='Заполните профиль' onClick={handleFillingClick}>
            <ProfileFilling />
          </Container>
        )}
        {viewContent === 'editPhone' && (
          <Container title='Телефон'>
            <EditPhone />
          </Container>
        )}
        {viewContent === 'editEmail' && (
          <Container title='E-mail'>
            <EditEmail />
          </Container>
        )}
        {viewContent === 'editName' && (
          <Container title='Имя в чатах'>
            <EditName />
          </Container>
        )}
        {viewContent === 'editLocation' && (
          <Container title='Мои адреса'>
            <EditLocation />
          </Container>
        )}
        {viewContent === 'addAuth' && (
          <Container title='2-FA'>
            <AddAuth />
          </Container>
        )}
      </>
    </div>
  )
}
