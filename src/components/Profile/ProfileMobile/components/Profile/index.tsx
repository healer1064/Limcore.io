import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { changeViewContent } from '../../../../../pages/cabinet/redux/cabinetSlice'
import { updateAvatarUser, getUser } from '../../../../../app/redux/userSlice'
import Styles from './styles.module.scss'
import { formatPhoneNumber } from '@helpers/formatPhone'

import { ButtonBig } from '../../../../../ui-kit/ButtonBig'
import avatarImage from '../../../../../assets/images/noAvatar.png'

export const Profile: React.FC = () => {
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
        <span className={Styles.title}>Заполните профиль</span>
        <span className={Styles.info}>Для восстановления доступа в случае полной потери доступа к аккаунту</span>
        <ButtonBig onClick={startFilling}>Перейти к заполнению</ButtonBig>
      </div>
      <p className={Styles.text}>Нужно будет указать ФИО, дату рождения, паспортные данные, ИНН и место жительства </p>
    </>
  )
}
