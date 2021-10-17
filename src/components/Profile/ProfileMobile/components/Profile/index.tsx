import React from 'react'
import { useAppDispatch } from '@app/redux/hooks'
import { changeViewHeader, changeViewContent } from '../../../../../pages/cabinet/redux/cabinetSlice'
import Styles from './styles.module.scss'

import { ButtonBig } from '../../../../../ui-kit/ButtonBig'
import avatarImage from '../../../../../assets/images/noAvatar.png'

export const Profile: React.FC = () => {
  const dispatch = useAppDispatch()

  const startFilling = () => {
    dispatch(changeViewHeader('filling'))
    dispatch(changeViewContent('filling'))
  }

  return (
    <>
      <div className={Styles.avatar}>
        <div className={Styles.image}>
          <img src={avatarImage} alt='Аватар' />
          <i className={Styles.edit}>{}</i>
        </div>
        <span className={Styles.phone}>+7 (913) 654-73-87</span>
      </div>
      <div className={Styles.block}>
        <span className={Styles.title}>Заполните профиль</span>
        <span className={Styles.info}>Мы предоставим доступ ко всем функциям</span>
        <ButtonBig onClick={startFilling}>Перейти к заполнению</ButtonBig>
      </div>
      <p className={Styles.text}>Нужно будет указать ФИО, дату рождения, паспортные данные, ИНН и место жительства </p>
    </>
  )
}
