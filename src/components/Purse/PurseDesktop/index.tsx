import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { Menu } from '@components/Purse/PurseDesktop/components/Menu'
import { Wallpaper } from '@components/Purse/PurseDesktop/components/Wallpaper'

import { BroadcastsDesktop } from '@components/Broadcasts/BroadcastsDesktop'
import { HeaderPurseDesktop } from './components/HeaderPurseDesktop'
import { changeViewContent } from '../../../pages/cabinet/redux/cabinetSlice'
import { Content } from './components/Content'
import { Chat } from '@components/Chat'
import chatIcon from '@icons/chatIcon.svg'
import closeIcon from '@icons/greyClose.svg'
import { setChatVisible } from '../../Chat/redux/chatSlice'

export const PurseDesktop = () => {
  const dispatch = useAppDispatch()
  const isSync = useAppSelector((state) => state.auth.isSincWithWallet)
  const viewPurseContent = useAppSelector((state) => state.cabinet.viewPurseContent)
  const chatVisible = useAppSelector((state) => state.chat.chatVisible)

  const handleChatOpen = () => {
    dispatch(setChatVisible(true))
  }

  const handleChatClose = () => {
    dispatch(setChatVisible(false))
  }

  const openMain = () => dispatch(changeViewContent('main'))
  useEffect(() => {
    openMain()
  }, [])

  // Логика появления страниц баланса LIMC & USDT
  const [pageCardBalance, setPageCardBalance] = useState('') // '' | 'LIMC' | 'USDT'
  const closeCard = () => setPageCardBalance('')
  const noop = () => {}

  const openLimcBalance = () => {
    if (isSync) {
      setPageCardBalance('LIMC')
      openMain()
    } else {
      noop()
    }
  }

  const openUsdtBalance = () => {
    if (isSync) {
      setPageCardBalance('USDT')
      openMain()
    } else {
      noop()
    }
  }

  // Модалки профиля и дней майнинга
  const [popup, setPopup] = useState('')
  const close = () => setPopup('')
  const openProfile = () => setPopup('profile')

  return (
    <>
      <Wallpaper />
      <section className={styles.purse}>
        <HeaderPurseDesktop isProfileActive={popup === 'profile'} openProfile={openProfile} closeProfile={close} />
        <div className={styles.purseContainer}>
          <Menu className={styles.accounts} openLimcBalance={openLimcBalance} openUsdtBalance={openUsdtBalance} />
          {viewPurseContent === 'broadcasts' && <BroadcastsDesktop />}
          {viewPurseContent === 'main' && (
            <Content pageCardBalance={pageCardBalance} closeCard={closeCard} openProfile={openProfile} />
          )}
        </div>
        <button className={styles.chatIcon} type='button'>
          {chatVisible ? (
            <img alt='chatClose' src={closeIcon} onClick={handleChatClose} />
          ) : (
            <img alt='chatOpen' src={chatIcon} onClick={handleChatOpen} />
          )}
        </button>
        {chatVisible ? <Chat handleChatClose={handleChatClose} /> : null}
      </section>
    </>
  )
}
