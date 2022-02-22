import React, { ReactNode } from 'react'
import styles from './style.module.scss'
import clsx from 'clsx'
import { Fade } from '@mui/material'

export interface IPopOver {
  isHover: boolean
  children: ReactNode
}

export const PopOver: React.FC<IPopOver> = ({ children, isHover }) => {
  const style = clsx({
    [styles.popover]: true,
  })
  return (
    <Fade in={isHover}>
      <div className={style}>{children}</div>
    </Fade>
  )
}
