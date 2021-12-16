import React, { useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { changeViewContent } from '../../.././../../pages/cabinet/redux/cabinetSlice'
import { updateAvatarUser, getUser, updateProfileUser } from '../../../../../app/redux/userSlice'
import Styles from './styles.module.scss'

import avatarImage from '../../../../../assets/images/noAvatar.png'
import passportIcon from '@icons/passport.svg'
import linkIcon from '@icons/link-icon.svg'
import authIcon from '@icons/auth.svg'
import emailIcon from '@icons/email.svg'
import phoneIcon from '@icons/phone.svg'
import locationIcon from '@icons/location.svg'
import chatIcon from '@icons/chatProfile.svg'
import nameIcon from '@icons/name.svg'
import closeIcon from '@icons/close-notification.svg'
import smartphoneImage from '../../../../../assets/images/smartphone.png'
import { useTranslation } from 'react-i18next'
import { ButtonSmall } from '../../../../../ui-kit/ButtonSmall'
import { ToggleButton } from '../../../../../ui-kit/ToggleButton'

export const ProfileComplete: React.FC = () => {
  const [t] = useTranslation()
  const dispatch = useAppDispatch()

  const [img, setImg] = useState(null)
  const [notificationOpen, setNotificationOpen] = useState(true)

  const userData = useAppSelector((state) => state.user.userData)
  const data = useAppSelector((state) => state.user.data)

  const chatName = Boolean(data.chat_name)
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

  const onClickChatName = () => {
    changeView('editName')
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

  const onShowLimcChange = async () => {
    const dataClone = JSON.parse(JSON.stringify(data))
    delete dataClone.avatar
    dataClone.is_balance_visible = !data.is_balance_visible

    const response = await dispatch(updateProfileUser(dataClone))
    if (!response.error) {
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
        <span className={Styles.name}>
          {userData?.profile?.first_name} {userData?.profile?.last_name}
        </span>
      </div>
      <div className={Styles.container}>
        <span className={Styles.caption}>{t('profile_documents')}</span>
        <div className={Styles.documents}>
          <div className={Styles.document}>
            <img className={Styles.icon} src={passportIcon} alt='Icon' />
            <span className={Styles.title}>{t('profile_rusPasport')}</span>
            <span className={Styles.subtitle}>
              {userData?.profile?.passport_series} {userData?.profile?.passport_number}
            </span>
            {/* <img className={Styles.link} src={linkIcon} alt='Icon' /> */}
          </div>
          {/* <div className={Styles.document}>
            <img className={Styles.icon} src={innIcon} alt='Icon' />
            <span className={Styles.title}>ИНН</span>
            <span className={Styles.subtitle}>{userData?.profile?.inn}</span>
            <img className={Styles.link} src={linkIcon} alt='Icon' />
          </div> */}
        </div>
        <ul className={Styles.list}>
          <li className={Styles.item}>
            <img className={Styles.icon} src={phoneIcon} alt='Icon' />
            <div className={Styles.wrapper}>
              <div className={Styles.block}>
                <span className={Styles.label}>{t('profile_phoneNumber')}</span>
                <span className={Styles.content}>{userData?.phone}</span>
              </div>
              {/* <ButtonSmall onClick={() => changeView('editPhone')}>Изменить</ButtonSmall> */}
            </div>
          </li>
          <li className={Styles.item}>
            <img className={Styles.icon} src={emailIcon} alt='Icon' />
            <div className={Styles.wrapper}>
              <div className={Styles.block}>
                <span className={Styles.label}>{t('profile_email')}</span>
                <span className={Styles.content}>{userData?.email}</span>
              </div>
              {/* <ButtonSmall onClick={() => changeView('editEmail')}>Изменить</ButtonSmall> */}
            </div>
          </li>
          <li className={Styles.item}>
            <img className={Styles.icon} src={nameIcon} alt='Icon' />
            <div className={Styles.wrapper}>
              <div className={Styles.block}>
                {chatName ? (
                  <div className={Styles.block}>
                    <span className={Styles.label}>{t('chat_nameInChat')}</span>
                    <span className={Styles.content}>{data.chat_name}</span>
                  </div>
                ) : (
                  <span className={Styles.content}>{t('chat_nameAdd')}</span>
                )}
              </div>
              <ButtonSmall onClick={onClickChatName}>{t('change')}</ButtonSmall>
            </div>
          </li>
          <li className={Styles.item}>
            <img className={Styles.icon} src={chatIcon} alt='Icon' />
            <div className={Styles.wrapper}>
              <div className={Styles.block}>
                <span className={Styles.content}>{t('chat_showRaiting')}</span>
              </div>
              <ToggleButton onChange={onShowLimcChange} checked={data.is_balance_visible} />
            </div>
          </li>
          <li className={Styles.item} onClick={onClickLocation}>
            <img className={Styles.icon} src={locationIcon} alt='Icon' />
            <div className={Styles.wrapper}>
              <div className={Styles.block}>
                <span className={Styles.content}>{t('profile_addresses')}</span>
              </div>
              <img className={Styles.arrow} src={linkIcon} alt='Icon' />
            </div>
          </li>
          <li className={Styles.item} onClick={onClick2FA}>
            <img className={Styles.icon} src={authIcon} alt='Icon' />
            <div className={`${Styles.wrapper} ${Styles.wrapper_edit}`}>
              <div className={Styles.block}>
                <span className={Styles.content}>{t('profile_2fa')}</span>
              </div>
              <img className={Styles.arrow} src={linkIcon} alt='Icon' />
            </div>
          </li>
        </ul>
        {!userData?.is_connected_2fa && notificationOpen && (
          <div className={Styles.notification} onClick={onClick2FA}>
            <span className={Styles.text}>{t('profile_2fa_connect')}</span>
            <img className={Styles.smartphone} src={smartphoneImage} alt='Icon' />
            <img className={Styles.close} src={closeIcon} alt='Icon' onClick={closeNotification} />
          </div>
        )}
      </div>
    </>
  )
}
