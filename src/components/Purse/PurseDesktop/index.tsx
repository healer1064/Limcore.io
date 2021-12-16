import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { Menu } from '@components/Purse/PurseDesktop/components/Menu'
import { Wallpaper } from '@components/Purse/PurseDesktop/components/Wallpaper'

import { BroadcastsDesktop } from '@components/Broadcasts/BroadcastsDesktop'
import { changeViewContent } from '../../../pages/cabinet/redux/cabinetSlice'
import { Content } from './components/Content'
import { Chat } from '@components/Chat'
import chatIcon from '@icons/chatIcon.svg'
import closeIcon from '@icons/greyClose.svg'
import { HeaderPurseDesktop } from '@components/Purse/PurseDesktop/components/HeaderPurseDesktop'
import { PageBalanceLIMC } from '@components/Purse/PurseDesktop/components/PageBalanceLIMC'

export const PurseDesktop = () => {
  const dispatch = useAppDispatch()

  const isSync = useAppSelector((state) => state.auth.isSincWithWallet)
  const viewPurseContent = useAppSelector((state) => state.cabinet.viewPurseContent)

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

  // Чат
  const [isChatVisible, setIsChatVisible] = useState(false)
  const handleChatOpen = () => setIsChatVisible(true)
  const handleChatClose = () => setIsChatVisible(false)
  // const bodyEl = useRef(document.querySelector('body'))
  // const htmlEl = useRef(document.querySelector('html'))

  // const [scrollPosition, setScrollPosition] = useState(0)

  // useEffect(() => {
  //   setScrollPosition(window.pageYOffset)
  //   const documentWidth = document.documentElement.clientWidth
  //   const windowWidth = window.innerWidth
  //   const scrollBarWidth = windowWidth - documentWidth
  //   bodyEl.current.style.paddingRight = scrollBarWidth.toString()

  //   if (isChatVisible) {
  //     setScrollPosition(window.pageYOffset)
  //     bodyEl.current.style.top = `-${window.pageYOffset}px`
  //     bodyEl.current.style.overflow = 'hidden'
  //     bodyEl.current.style.position = 'fixed'
  //     htmlEl.current.style.height = '100vh'
  //   } else {
  //     bodyEl.current.style.removeProperty('overflow')
  //     bodyEl.current.style.removeProperty('position')
  //     bodyEl.current.style.removeProperty('top')
  //     htmlEl.current.style.removeProperty('height')
  //     window.scrollTo(0, scrollPosition)
  //   }

  //   return () => {
  //     bodyEl.current.style.removeProperty('overflow')
  //     bodyEl.current.style.removeProperty('position')
  //     bodyEl.current.style.removeProperty('top')
  //     htmlEl.current.style.removeProperty('height')
  //   }
  // }, [isChatVisible])

  return (
    <>
      <Wallpaper />
      <section className={styles.purse}>
        <HeaderPurseDesktop isProfileActive={popup === 'profile'} openProfile={openProfile} closeProfile={close} />

        <div className={styles.purseContainer}>
          <div className={styles.accounts}>
            <Menu openLimcBalance={openLimcBalance} openUsdtBalance={openUsdtBalance} />
          </div>

          {viewPurseContent === 'broadcasts' && <BroadcastsDesktop />}
          {viewPurseContent === 'main' && (
            <Content pageCardBalance={pageCardBalance} closeCard={closeCard} openProfile={openProfile} />
          )}
        </div>
        <button className={styles.chatIcon} type='button'>
          {isChatVisible ? (
            <img alt='' src={closeIcon} onClick={handleChatClose} />
          ) : (
            <img alt='' src={chatIcon} onClick={handleChatOpen} />
          )}
        </button>
        {isChatVisible ? (
          <div className={styles.chatContainer}>
            <Chat handleChatClose={handleChatClose} />{' '}
          </div>
        ) : null}
      </section>
    </>
  )
}
