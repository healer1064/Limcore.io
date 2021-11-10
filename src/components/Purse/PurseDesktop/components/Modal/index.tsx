import React, { SyntheticEvent } from 'react'
import ReactDOM from 'react-dom'
import styles from './styles.module.scss'
import classNames from 'classnames'

interface IModalProps {
  active: boolean
  setActive?: (boolean) => void
  children?: React.ReactNode
  style?: {
    zIndex?: number
    overflow?: string
    backgroundColor?: string
  }
  classname?: string
  crossFlag?: boolean
}

export const Modal = ({ active, setActive, children, style, classname, crossFlag }: IModalProps) => {
  const node = document.getElementById('root')
  const modalClass = active ? styles.modalActive : styles.modal

  const handleModalOutClick = () => {
    setActive(false)
  }

  const handleModalContentClick = (event: SyntheticEvent) => {
    event.stopPropagation()
  }

  return ReactDOM.createPortal(
    <div className={classNames(modalClass, classname)} onClick={handleModalOutClick} style={style}>
      <div className={styles.modalContent} onClick={handleModalContentClick}>
        {crossFlag && <button type='button' className={styles.close} onClick={setActive} />}
        {children}
      </div>
    </div>,
    node,
  )
}
