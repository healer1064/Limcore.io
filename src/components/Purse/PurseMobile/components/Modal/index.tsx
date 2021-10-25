import React, { SyntheticEvent } from 'react'
import ReactDOM from 'react-dom'
import styles from './styles.module.scss'

interface IModalProps {
  active: boolean
  setActive?: React.Dispatch<React.SetStateAction<boolean>>
  children?: React.ReactNode
  style?: {
    zIndex?: number
    overflow?: string
    backgroundColor?: string
  }
}

export const Modal = ({ active, setActive, children, style }: IModalProps) => {
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
        {children}
      </div>
    </div>,
    node,
  )
}
