import React, { ReactNode } from 'react'
import { TableCell, withStyles } from '@material-ui/core'
import clsx from 'clsx'
import styles from './style.module.scss'

export interface IStyledMobileCell {
  children?: ReactNode
  align?: 'left' | 'right' | 'inherit' | 'center' | 'justify'
  className?: string
}

const MobileStyledCell = withStyles(() => ({
  root: {
    position: 'relative',
    verticalAlign: 'middle',
    fontSize: 14,
    lineHeight: '22px',
    padding: '10px',
    fontFamily: ['IbmPlexSans', 'Arial'].join(','),
    border: 'none',
    color: '#E1E1D8',
    zIndex: 1000,
    '&:first-child': {
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
    },
    '&:last-child': {
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
    },
    '@media (max-width: 374px)': {
      fontSize: 12,
      padding: '4px',
    },
  },
}))(TableCell)

export const MobileCell: React.FC<IStyledMobileCell> = ({ className, children, align }) => {
  const style = clsx({
    [styles.primary_color]: true,
    [className]: className,
  })
  return (
    <MobileStyledCell align={align} className={style}>
      {children}
    </MobileStyledCell>
  )
}
