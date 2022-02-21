import React from 'react'
import styles from './style.module.scss'
import clsx from 'clsx'

export interface IMobileNavTab {
  text: string
  chosen?: boolean
  className?: string
  onClick?: () => void
}

export const MobileNavTab: React.FC<IMobileNavTab> = ({ text, chosen, className, onClick }) => {
  const style = clsx({
    [styles.container]: true,
    [className]: className,
    [styles.chosen]: chosen,
  })
  return (
    <div onClick={onClick} className={style}>
      {text}
    </div>
  )
}
