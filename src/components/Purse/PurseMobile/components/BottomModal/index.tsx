import React, { SyntheticEvent } from 'react'
import ReactDOM from 'react-dom'
import styles from './styles.module.scss'

interface IBottomModalProps {
  active: boolean
  setActive: (boolean) => void
  children?: React.ReactNode
  title?: string
  subtitle?: string
  style?: {
    zIndex?: number
  }
}

export const BottomModal = ({ active, setActive, title, subtitle, children, style }: IBottomModalProps) => {
  const node = document.getElementById('root')
  const modalClass = active ? styles.modalActive : styles.modal

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
        <p className={styles.subtitle}>{subtitle}</p>
        {children}
      </div>
    </div>,
    node,
  )
}
