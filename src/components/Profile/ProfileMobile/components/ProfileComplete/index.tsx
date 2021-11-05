import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { changeViewContent } from '../../.././../../pages/cabinet/redux/cabinetSlice'
import Styles from './styles.module.scss'

import { ButtonSmall } from '../../../../../ui-kit/ButtonSmall'

import avatarImage from '../../../../../assets/images/noAvatar.png'
import passportIcon from '@icons/passport.svg'
import innIcon from '@icons/inn.svg'
import linkIcon from '@icons/link-icon.svg'
import authIcon from '@icons/auth.svg'
import emailIcon from '@icons/email.svg'
import phoneIcon from '@icons/phone.svg'
import nameIcon from '@icons/name.svg'
import locationIcon from '@icons/location.svg'
import closeIcon from '@icons/close-notification.svg'
import smartphoneImage from '../../../../../assets/images/smartphone.png'

export const ProfileComplete: React.FC = () => {
  const dispatch = useAppDispatch()
  const userData = useAppSelector((state) => state.user.userData)
  const [notificationOpen, setNotificationOpen] = useState(true)

  const closeNotification = () => setNotificationOpen(false)
  const changeView = (view) => dispatch(changeViewContent(view))

  return (
    <>
      <div className={Styles.avatar}>
        <div className={Styles.image}>
          <img src={avatarImage} alt='Аватар' />
          <i className={Styles.edit}>{}</i>
        </div>
        <span className={Styles.name}>
          {userData?.profile?.first_name} {userData?.profile?.last_name}
        </span>
      </div>
      <div className={Styles.container}>
        <span className={Styles.caption}>Документы</span>
        <div className={Styles.documents}>
          <div className={Styles.document}>
            <img className={Styles.icon} src={passportIcon} alt='Иконка' />
            <span className={Styles.title}>Паспорт РФ</span>
            <span className={Styles.subtitle}>
              {userData?.profile?.passport_series} {userData?.profile?.passport_number}
            </span>
            <img className={Styles.link} src={linkIcon} alt='Иконка' />
          </div>
          <div className={Styles.document}>
            <img className={Styles.icon} src={innIcon} alt='Иконка' />
            <span className={Styles.title}>ИНН</span>
            <span className={Styles.subtitle}>456834512889</span>
            <img className={Styles.link} src={linkIcon} alt='Иконка' />
          </div>
        </div>
        <ul className={Styles.list}>
          <li className={Styles.item}>
            <img className={Styles.icon} src={phoneIcon} alt='Иконка' />
            <div className={Styles.wrapper}>
              <div className={Styles.block}>
                <span className={Styles.label}>Телефон</span>
                <span className={Styles.content}>{userData?.phone}</span>
              </div>
              <ButtonSmall onClick={() => changeView('editPhone')}>Изменить</ButtonSmall>
            </div>
          </li>
          <li className={Styles.item}>
            <img className={Styles.icon} src={emailIcon} alt='Иконка' />
            <div className={Styles.wrapper}>
              <div className={Styles.block}>
                <span className={Styles.label}>E-mail</span>
                <span className={Styles.content}>{userData?.email}</span>
              </div>
              <ButtonSmall onClick={() => changeView('editEmail')}>Изменить</ButtonSmall>
            </div>
          </li>
          <li className={Styles.item}>
            <img className={Styles.icon} src={nameIcon} alt='Иконка' />
            <div className={Styles.wrapper}>
              <div className={Styles.block}>
                <span className={Styles.content}>Добавить имя в чатах</span>
              </div>
              <ButtonSmall onClick={() => changeView('editName')}>Изменить</ButtonSmall>
            </div>
          </li>
          <li className={Styles.item}>
            <img className={Styles.icon} src={locationIcon} alt='Иконка' />
            <div className={Styles.wrapper}>
              <div className={Styles.block}>
                <span className={Styles.content}>Мои адреса</span>
              </div>
              <img className={Styles.arrow} src={linkIcon} alt='Иконка' onClick={() => changeView('editLocation')} />
            </div>
          </li>
          <li className={Styles.item}>
            <img className={Styles.icon} src={authIcon} alt='Иконка' />
            <div className={`${Styles.wrapper} ${Styles.wrapper_edit}`}>
              <div className={Styles.block}>
                <span className={Styles.content}>Двухфакторная аутентификация</span>
              </div>
              <img className={Styles.arrow} src={linkIcon} alt='Иконка' onClick={() => changeView('addAuth')} />
            </div>
          </li>
        </ul>
        <div className={`${notificationOpen ? Styles.notification : Styles.notification_invisible}`}>
          <span className={Styles.text}>Подключите двухфакторную аутентификацию</span>
          <img className={Styles.smartphone} src={smartphoneImage} alt='Иконка' />
          <img className={Styles.close} src={closeIcon} alt='Иконка' onClick={closeNotification} />
        </div>
      </div>
    </>
  )
}
