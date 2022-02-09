import React, { SyntheticEvent, useRef, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import styles from './styles.module.scss'

interface IBottomModalProps {
  active: boolean
  setActive?: (boolean) => void
  children?: React.ReactNode
  title?: string
  subtitle?: string
  style?: {
    zIndex?: number
  }
}

export const BottomModal = ({ active, setActive, title, children, style }: IBottomModalProps) => {
  const node = document.getElementById('root')
  const modalClass = active ? styles.modalActive : styles.modal
  const bodyEl = useRef(document.querySelector('body'))
  const htmlEl = useRef(document.querySelector('html'))
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

  const handleModalOutClick = () => {
    setActive(false)
  }

  const handleModalContentClick = (event: SyntheticEvent) => {
    event.stopPropagation()
  }

  return ReactDOM.createPortal(
    <div className={modalClass} onClick={handleModalOutClick} style={style}>
      <div className={styles.modalContent} onClick={handleModalContentClick}>
        <button type='button' className={styles.close} onClick={setActive} />
        <h4 className={styles.title}>{title}</h4>
        {children}
      </div>
    </div>,
    node,
  )
}
