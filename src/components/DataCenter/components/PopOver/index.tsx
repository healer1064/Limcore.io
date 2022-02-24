import React from 'react'
import styles from './style.module.scss'
import clsx from 'clsx'

export interface IPopOver {
  children: any
  isHover: boolean
}

export const PopOver: React.FC<IPopOver> = ({ children, isHover }) => {
  const style = clsx({
    [styles.popover]: true,
    [styles.display]: isHover,
    [styles.none]: !isHover,
  })
  return <div className={style}>{children}</div>
}
