import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setProfileComplete } from '../../../pages/cabinet/redux/cabinetSlice'
import { setData } from '../../../app/redux/userSlice'
import Styles from './styles.module.scss'

import { Container } from '@components/Container'
import { Profile } from './components/Profile'
import { ProfileFilling } from './components/ProfileFilling'
import { ProfileComplete } from './components/ProfileComplete'
import { EditLocation } from './components/EditLocation'
import { AddAuth } from './components/AddAuth'
import { useTranslation } from 'react-i18next'
import { FooterMobile } from '@components/Footer/FooterMobile'

export const ProfileMobile: React.FC = () => {
  const [t] = useTranslation()
  const dispatch = useAppDispatch()
  const userData = useAppSelector((state) => state.user.userData)
  const profileComplete = useAppSelector((state) => state.cabinet.profileComplete)
  const viewContent = useAppSelector((state) => state.cabinet.viewContent)
  console.log(userData)

  // const onBackAddAuth = () => {
  //   dispatch(changeViewContent('addAuth'))
  //   dispatch(changeStep(0))
  // }

  useEffect(() => {
    if (userData !== null) {
      dispatch(setData({ ...userData.profile }))
    }

    if (userData !== null && userData?.first_name /* && user.first_name && user.last_name && user.gender */) {
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
              <Container title={t('profile_fillIn')}>
                <ProfileFilling />
              </Container>
            )}
            {viewContent === 'editLocation' && (
              <Container title={t('profile_addresses')}>
                <EditLocation />
              </Container>
            )}
            {viewContent === 'addAuth' && (
              <Container title='2-FA'>
                <AddAuth />
              </Container>
            )}
            {/* {viewContent === 'editPhone' && (
              <Container title={t('profile_phoneNumber')}>
                <EditPhone />
              </Container>
            )} */}
            {/* {viewContent === 'editEmail' && (
              <Container title='E-mail'>
                <EditEmail />
              </Container>
            )} */}
            {/* {viewContent === 'editName' && (
              <Container title='Имя в чатах'>
                <EditName />
              </Container>
            )} */}
            {/* {viewContent === 'changePhone' && (
              <Container title='Изменить номер телефона' onClickBack={onBackAddAuth}>
                <ChangePhone />
              </Container>
            )} */}
          </>
        ) : null}
      </>
      <FooterMobile />
    </div>
  )
}
