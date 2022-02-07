import React, { useState } from 'react'
import { VectorIcon } from '@icons/VectorIcon'
import classNames from 'classnames'
import Styles from './style.module.scss'

interface IDropdown {
  children: React.ReactNode
  title: string
}

export const Dropdown = ({ title, children }: IDropdown) => {
  const [isOpened, setIsOpened] = useState(false)

  let timeout = null
  const open = () => {
    clearInterval(timeout)
    setIsOpened(true)
  }

  const close = () => {
    timeout = setTimeout(() => setIsOpened(false), 100)
  }

  return (
    <div className={Styles.dropdown}>
      <div className={classNames(Styles.title, isOpened && Styles.active)} onMouseEnter={open} onMouseLeave={close}>
        <p className={Styles.text}>{title}</p>
        <span className={classNames(isOpened && Styles.arrowActive, Styles.arrow)}>
          <VectorIcon />
        </span>
      </div>
      <div
        className={classNames(Styles.dropdown__menu, isOpened && Styles.active)}
        onMouseEnter={open}
        onMouseLeave={close}
      >
        {children}
      </div>
    </div>
  )
}
