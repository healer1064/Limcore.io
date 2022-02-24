import React, { ReactNode } from 'react'
import styles from './style.module.scss'
import { Fade } from '@mui/material'

export interface IPopOver {
  isHover: boolean
  children: ReactNode
  left: string
  top: string
}

export const PopOver: React.FC<IPopOver> = ({ children, isHover, left, top }) => {
  const leftAndTop = {
    left: `${left}`,
    top: `${top}`,
  }
  return (
    <Fade in={isHover}>
      <div className={styles.popover} style={leftAndTop}>
        {children}
      </div>
    </Fade>
  )
}
