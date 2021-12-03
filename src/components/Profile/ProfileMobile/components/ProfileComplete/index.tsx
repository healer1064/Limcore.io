import React, { useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { changeViewContent } from '../../.././../../pages/cabinet/redux/cabinetSlice'
import { updateAvatarUser, getUser } from '../../../../../app/redux/userSlice'
import Styles from './styles.module.scss'

import avatarImage from '../../../../../assets/images/noAvatar.png'
import passportIcon from '@icons/passport.svg'
import linkIcon from '@icons/link-icon.svg'
import authIcon from '@icons/auth.svg'
import emailIcon from '@icons/email.svg'
import phoneIcon from '@icons/phone.svg'
import locationIcon from '@icons/location.svg'
import closeIcon from '@icons/close-notification.svg'
import smartphoneImage from '../../../../../assets/images/smartphone.png'
import { useTranslation } from 'react-i18next'

export const ProfileComplete: React.FC = () => {
  const [t] = useTranslation()
  const dispatch = useAppDispatch()

  const [img, setImg] = useState(null)
  const [notificationOpen, setNotificationOpen] = useState(true)
  const userData = useAppSelector((state) => state.user.userData)

  const bodyEl = useRef(document.querySelector('body'))

  const closeNotification = (event) => {
    event.stopPropagation()
    setNotificationOpen(false)
  }

  const changeView = (view) => dispatch(changeViewContent(view))

  const onClick2FA = () => {
    changeView('addAuth')
    bodyEl.current.style.overflow = 'hidden'
  }

  const onClickLocation = () => {
    changeView('editLocation')
    bodyEl.current.style.overflow = 'hidden'
  }

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
            <img className={Styles.image} src={avatarImage} alt='Avatar' />
            <label className={Styles.edit}>
              <input type='file' onChange={(event) => setImg(event.target.files[0])} />
            </label>
          </div>
        ) : (
          <div className={Styles.avatar}>
            <img className={Styles.image} src={userData?.profile?.avatar} alt='Avatar' />
            <label className={Styles.edit}>
              <input type='file' onChange={(event) => setImg(event.target.files[0])} />
            </label>
          </div>
        )}
        <p className={Styles.name}>
          {userData?.profile?.first_name} {userData?.profile?.last_name}
        </p>
      </div>
      <div className={Styles.container}>
        <h3 className={Styles.caption}>{t('profile_documents')}</h3>
        <div className={Styles.documents}>
          <div className={Styles.document}>
            <img className={Styles.icon} src={passportIcon} alt='Иконка' />
            <p className={Styles.title}>{t('profile_rusPasport')}</p>
            <p className={Styles.subtitle}>
              {userData?.profile?.passport_series} {userData?.profile?.passport_number}
            </p>
          </div>
          {/* <div className={Styles.document}>
            <img className={Styles.icon} src={innIcon} alt='Иконка' />
            <span className={Styles.title}>ИНН</span>
            <span className={Styles.subtitle}>{userData?.profile?.inn}</span>
            <img className={Styles.link} src={linkIcon} alt='Иконка' />
          </div> */}
        </div>
        <ul className={Styles.list}>
          <li className={Styles.item}>
            <img className={Styles.icon} src={phoneIcon} alt='Иконка' />
            <div className={Styles.wrapper}>
              <div className={Styles.block}>
                <p className={Styles.label}>{t('profile_phoneNumber')}</p>
                <p className={Styles.content}>{userData?.phone}</p>
              </div>
              {/* <ButtonSmall onClick={() => changeView('editPhone')}>Изменить</ButtonSmall> */}
            </div>
          </li>
          <li className={Styles.item}>
            <img className={Styles.icon} src={emailIcon} alt='Иконка' />
            <div className={Styles.wrapper}>
              <div className={Styles.block}>
                <p className={Styles.label}>{t('profile_email')}</p>
                <p className={Styles.content}>{userData?.email}</p>
              </div>
              {/* <ButtonSmall onClick={() => changeView('editEmail')}>Изменить</ButtonSmall> */}
            </div>
          </li>
          {/* <li className={Styles.item}>
            <img className={Styles.icon} src={nameIcon} alt='Иконка' />
            <div className={Styles.wrapper}>
              <div className={Styles.block}>
                <span className={Styles.content}>Добавить имя в чатах</span>
              </div>
              <ButtonSmall onClick={() => changeView('editName')}>Изменить</ButtonSmall>
            </div>
          </li> */}
          <li className={Styles.item} onClick={onClickLocation}>
            <img className={Styles.icon} src={locationIcon} alt='Иконка' />
            <div className={Styles.wrapper}>
              <div className={Styles.block}>
                <p className={Styles.content}>{t('profile_addresses')}</p>
              </div>
              <button type='button'>
                <img className={Styles.arrow} src={linkIcon} alt='Иконка' />
              </button>
            </div>
          </li>
          <li className={Styles.item} onClick={onClick2FA}>
            <img className={Styles.icon} src={authIcon} alt='Иконка' />
            <div className={`${Styles.wrapper} ${Styles.wrapper_edit}`}>
              <div className={Styles.block}>
                <p className={Styles.content}>{t('profile_2fa')}</p>
              </div>
              <button type='button'>
                <img className={Styles.arrow} src={linkIcon} alt='Иконка' />
              </button>
            </div>
          </li>
        </ul>
        {!userData?.is_connected_2fa && notificationOpen && (
          <div className={Styles.notification} onClick={onClick2FA}>
            <span className={Styles.text}>{t('profile_2fa_connect')}</span>
            <img className={Styles.smartphone} src={smartphoneImage} alt='Иконка' />
            <button className={Styles.close} type='button'>
              <img src={closeIcon} alt='Иконка' onClick={closeNotification} />
            </button>
          </div>
        )}
      </div>
    </>
  )
}
