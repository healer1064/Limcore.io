import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { changeViewContent } from '../../../../../pages/cabinet/redux/cabinetSlice'
import { updateAvatarUser, getUser } from '../../../../../app/redux/userSlice'
import Styles from './styles.module.scss'
import { formatPhoneNumber } from '@helpers/formatPhone'

import { ButtonBig } from '../../../../../ui-kit/ButtonBig'
import avatarImage from '../../../../../assets/images/noAvatar.png'
import { useTranslation } from 'react-i18next'

export const Profile: React.FC = () => {
  const [t] = useTranslation()
  const dispatch = useAppDispatch()
  const userData = useAppSelector((state) => state.user.userData)
  const [img, setImg] = useState(null)

  const startFilling = () => dispatch(changeViewContent('filling'))

  const updateAvatar = async () => {
    const data = new FormData()
    data.append('avatar', img)

    const response = await dispatch(updateAvatarUser(data))

    if (response.error) {
      console.log('error updateAvatarUser')
    } else {
      dispatch(getUser())
    }
  }

  useEffect(() => {
    if (img) {
      updateAvatar()
    }
  }, [img])

  return (
    <>
      <div className={Styles.info}>
        {userData?.profile?.avatar === null ? (
          <div className={Styles.avatar}>
            <div className={Styles.image}>
              <img src={avatarImage} alt='Аватар' />
            </div>
            <label className={Styles.edit}>
              <input type='file' onChange={(event) => setImg(event.target.files[0])} />
            </label>
          </div>
        ) : (
          <div className={Styles.avatar}>
            <div className={Styles.image}>
              <img src={userData?.profile?.avatar} alt='Аватар' />
            </div>
            <label className={Styles.edit}>
              <input type='file' onChange={(event) => setImg(event.target.files[0])} />
            </label>
          </div>
        )}
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
