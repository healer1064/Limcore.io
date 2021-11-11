import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setProfileComplete, changeViewContent, changeStep } from '../../../pages/cabinet/redux/cabinetSlice'
import { setData } from '../../../app/redux/userSlice'
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
import { ChangePhone } from './components/AddAuth/components/ChangePhone'

export const ProfileDesktop: React.FC = () => {
  const dispatch = useAppDispatch()
  const userData = useAppSelector((state) => state.user.userData)
  const data = useAppSelector((state) => state.user.data)
  const user = useAppSelector((state) => state.user.data)
  const profileComplete = useAppSelector((state) => state.cabinet.profileComplete)
  const viewContent = useAppSelector((state) => state.cabinet.viewContent)

  // const handleFillingClick = () => dispatch(changeViewContent('none'))

  const onBackAddAuth = () => {
    dispatch(changeViewContent('addAuth'))
    dispatch(changeStep(0))
  }

  useEffect(() => {
    if (userData !== null) {
      dispatch(setData({ ...userData.profile }))
    }

    if (userData !== null && userData?.profile !== null /* && user.first_name && user.last_name && user.gender */) {
      dispatch(setProfileComplete(true))
    }

    // if (!user.first_name && !user.last_name && !user.gender) {
    //   dispatch(changeViewContent('filling'))
    // } else {
    //   dispatch(changeViewContent('profile'))
    // }
  }, [userData])

  return (
    <div className={Styles.profile}>
      {profileComplete ? <ProfileComplete /> : <Profile />}
      <>
        {viewContent ? (
          <>
            {viewContent === 'filling' && (
              <Container title='Заполните профиль' /* onClick={handleFillingClick} */>
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
            {viewContent === 'changePhone' && (
              <Container title='Изменить номер телефона' onClickBack={onBackAddAuth}>
                <ChangePhone />
              </Container>
            )}
          </>
        ) : null}
      </>
    </div>
  )
}
