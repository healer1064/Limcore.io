import React from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { changeViewContent } from '../../../../../pages/cabinet/redux/cabinetSlice'
import Styles from './styles.module.scss'
import { formatPhoneNumber } from '@helpers/formatPhone'

import { ButtonBig } from '../../../../../ui-kit/ButtonBig'
import avatarImage from '../../../../../assets/images/noAvatar.png'

export const Profile: React.FC = () => {
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
        <span className={Styles.title}>Заполните профиль</span>
        <span className={Styles.info}>Для восстановления доступа в случае полной потери доступа к аккаунту</span>
        <ButtonBig onClick={startFilling}>Перейти к заполнению</ButtonBig>
      </div>
      <p className={Styles.text}>Нужно будет указать ФИО, дату рождения, паспортные данные, ИНН и место жительства </p>
    </>
  )
}
