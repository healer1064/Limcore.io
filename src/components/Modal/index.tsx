import React, { SyntheticEvent, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { CloseIcon } from '@icons/CloseIcon'

interface IModalProps {
  active: boolean
  setActive?: (arg0: boolean) => void

  children?: React.ReactNode
  classname?: string
  style?: {
    zIndex?: number
    overflow?: string
    backgroundColor?: string
  }

  crossFlag?: boolean
  isMobile?: boolean
  isDesktop?: boolean
  isAuthModal?: boolean
}

export const Modal = ({
  active,
  setActive,

  children,
  style,
  classname,

  crossFlag,
  isMobile,
  isDesktop,
  isAuthModal,
}: IModalProps) => {
  const node = document.getElementById('root')
  const bodyEl = useRef(document.querySelector('body'))
  const htmlEl = useRef(document.querySelector('html'))

  const modalClass = active ? styles.modalActive : styles.modal
  const authClass = isAuthModal && styles.authModal
  const mobileClass = isMobile && styles.mobileModal
  const desktopClass = isDesktop && styles.desktopModal

  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    setScrollPosition(window.pageYOffset)
    const documentWidth = document.documentElement.clientWidth
    const windowWidth = window.innerWidth
    const scrollBarWidth = windowWidth - documentWidth
    bodyEl.current.style.paddingRight = scrollBarWidth.toString()

    if (active) {
      setScrollPosition(window.pageYOffset)
      bodyEl.current.style.top = `-${window.pageYOffset}px`
      bodyEl.current.style.overflow = 'hidden'
      bodyEl.current.style.position = 'fixed'
      htmlEl.current.style.height = '100vh'
    } else {
      bodyEl.current.style.removeProperty('overflow')
      bodyEl.current.style.removeProperty('position')
      bodyEl.current.style.removeProperty('top')
      htmlEl.current.style.removeProperty('height')
      window.scrollTo(0, scrollPosition)
    }

    return () => {
      bodyEl.current.style.removeProperty('overflow')
      bodyEl.current.style.removeProperty('position')
      bodyEl.current.style.removeProperty('top')
      htmlEl.current.style.removeProperty('height')
    }
  }, [active])

  const handleModalOutClick = () => setActive(false)
  const handleClose = () => setActive(false)

  const handleModalContentClick = (event: SyntheticEvent) => event.stopPropagation()

  return ReactDOM.createPortal(
    <div
      className={classNames(modalClass, authClass, mobileClass, desktopClass, classname)}
      onClick={handleModalOutClick}
      style={style}
    >
      <div className={classNames(styles.modalContent, styles.isMomentumScrollable)} onClick={handleModalContentClick}>
        {crossFlag && (
          <button type='button' className={styles.close} onClick={handleClose}>
            <CloseIcon />
          </button>
        )}
        {children}
      </div>
    </div>,
    node,
  )
}
