import React from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import Styles from './styles.module.scss'

import avatarImage from '../../../assets/images/noAvatar.png'
import editIcon from '@icons/edit.svg'

export const ProfileMobile = () => {
  const viewContent = useAppSelector((state) => state.cabinet.viewContent)

  return (
    <div className={Styles.profile}>
      {viewContent === 'profile' && (
        <>
          <div className={Styles.avatar}>
            <div className={Styles.image}>
              <img src={avatarImage} alt='Аватар' />
              <i className={Styles.icon}>{}</i>
            </div>
            <span className={Styles.phone}>+7 (913) 654-73-87</span>
          </div>
          <div className={Styles.block}>
            <span className={Styles.title}>Заполните профиль</span>
            <span className={Styles.info}>Мы предоставим доступ ко всем функциям</span>
            <button className={Styles.button}>Перейти к заполнению</button>
          </div>
          <p className={Styles.text}>
            Нужно будет указать ФИО, дату рождения, паспортные данные, ИНН и место жительства{' '}
          </p>
        </>
      )}
      {viewContent === 'filling' && (
        <>
          <div className={Styles.progress}>sa</div>
          <div className={Styles.container}>
            <span className={Styles.caption}>Укажите ФИО, дату рождения и пол</span>
            <form className={Styles.form}>
              <label className={Styles.label}>
                Имя*
                <input className={Styles.input} type='text' placeholder='Введите ваше имя' />
              </label>
              <label className={Styles.label}>
                Фамилия*
                <input className={Styles.input} type='text' placeholder='Введите вашу фамилию' />
              </label>
              <label className={Styles.label}>
                Отчество*
                <input className={Styles.input} type='text' placeholder='Введите ваше отчество' />
              </label>
              <label className={Styles.label}>
                <input className={Styles.hideCheckbox} type='checkbox' />
                <span className={Styles.checkbox}>{}</span>У меня нет отчества
              </label>
              <label className={Styles.label}>Дата рождения*</label>
              <label className={Styles.label}>
                Пол*
                <div className={Styles.radios}>
                  <label>
                    <input className={Styles.hideRadio} type='radio' name='radio' />
                    <span className={Styles.radio}>{}</span>
                    Мужской
                  </label>
                  <label>
                    <input className={Styles.hideRadio} type='radio' name='radio' />
                    <span className={Styles.radio}>{}</span>
                    Женский
                  </label>
                </div>
              </label>
              <button className={Styles.button}>Продолжить</button>
            </form>
          </div>
        </>
      )}
    </div>
  )
}
