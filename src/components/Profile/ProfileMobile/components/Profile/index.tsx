import React from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { changeViewContent } from '../../../../../pages/cabinet/redux/cabinetSlice'
import Styles from './styles.module.scss'
import { formatPhoneNumber } from '@helpers/formatPhone'

import { ButtonBig } from '../../../../../ui-kit/ButtonBig'
import avatarImage from '../../../../../assets/images/noAvatar.png'
import { useTranslation } from 'react-i18next'

export const Profile: React.FC = () => {
  const [t] = useTranslation()
  const dispatch = useAppDispatch()
  const userData = useAppSelector((state) => state.user.userData)

  const startFilling = () => dispatch(changeViewContent('filling'))

  return (
    <>
      <div className={Styles.avatar}>
        <div className={Styles.image}>
          <img src={avatarImage} alt='Аватар' />
          {/* <i className={Styles.edit}>{}</i> */}
        </div>
        <span className={Styles.phone}>{formatPhoneNumber(userData?.phone)}</span>
      </div>
      <div className={Styles.block}>
        <span className={Styles.title}>{t('profile_fillIn')}</span>
        <span className={Styles.info}>{t('profile_willGrant')}</span>
        <ButtonBig onClick={startFilling}>{t('purse_goFilling')}</ButtonBig>
      </div>
      <p className={Styles.text}>{t('profile_subtitle')}</p>
    </>
  )
}
