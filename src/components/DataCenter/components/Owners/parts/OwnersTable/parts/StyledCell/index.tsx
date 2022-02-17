import React, { ReactNode } from 'react'
import { TableCell, withStyles } from '@material-ui/core'
import clsx from 'clsx'
import styles from './style.module.scss'

export interface IStyledCell {
  children?: ReactNode
  align?: 'left' | 'right' | 'inherit' | 'center' | 'justify'
  className?: string
  open?: boolean
}

const Cell = withStyles(() => ({
  root: {
    position: 'relative',
    verticalAlign: 'middle',
    fontSize: 16,
    paddingTop: '20px',
    paddingBottom: '20px',
    fontFamily: ['IbmPlexSans', 'Arial'].join(','),
    border: 'none',
    color: '#A4A4A4',
    zIndex: 1000,
    '&:first-child': {
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
    },
    '&:last-child': {
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
    },
  },
}))(TableCell)

export const StyledCell: React.FC<IStyledCell> = ({ className, children, align, open }) => {
  const style = clsx({
    [styles.primary_color]: !open,
    [styles.secondary_color]: open,
  })

  return (
    <Cell align={align} className={`${style} ${className}`}>
      {children}
    </Cell>
  )
}
