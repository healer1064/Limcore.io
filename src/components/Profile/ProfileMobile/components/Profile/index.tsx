import React, { useRef } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { changeViewContent } from '../../../../../pages/cabinet/redux/cabinetSlice'
// import { updateAvatarUser, getUser } from '../../../../../app/redux/userSlice'
import Styles from './styles.module.scss'
import { formatPhoneNumber } from '@helpers/formatPhone'

import { ButtonBig } from '../../../../../ui-kit/ButtonBig'
import avatarImage from '../../../../../assets/images/noAvatar.png'
import { useTranslation } from 'react-i18next'

export const Profile: React.FC = () => {
  const [t] = useTranslation()
  const dispatch = useAppDispatch()
  const userData = useAppSelector((state) => state.user.userData)
  const bodyEl = useRef(document.querySelector('body'))

  const startFilling = () => {
    dispatch(changeViewContent('filling'))
    bodyEl.current.style.overflow = 'hidden'
  }

  return (
    <>
      <div className={Styles.info}>
        <img className={`${Styles.image} ${Styles.avatar}`} src={avatarImage} alt='Аватар' />
        <p className={Styles.phone}>{formatPhoneNumber(userData?.phone)}</p>
      </div>
      <div className={Styles.block}>
        <h2 className={Styles.title}>{t('profile_fillIn')}</h2>
        <p className={Styles.info}>{t('profile_willGrant')}</p>
        <ButtonBig onClick={startFilling}>{t('purse_goFilling')}</ButtonBig>
      </div>
      <p className={Styles.text}>{t('profile_subtitle')}</p>
    </>
  )
}
