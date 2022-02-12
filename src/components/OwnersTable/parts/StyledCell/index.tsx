import React, { ReactNode } from 'react'
import { TableCell, withStyles } from '@material-ui/core'

export interface IStyledCell {
  children?: ReactNode
  align?: 'left' | 'right' | 'inherit' | 'center' | 'justify'
  className?: string
}

const Cell = withStyles(() => ({
  root: {
    position: 'relative',
    verticalAlign: 'middle',
    fontSize: 16,
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

export const StyledCell: React.FC<IStyledCell> = ({ className, children, align }) => {
  return (
    <Cell align={align} className={className}>
      {children}
    </Cell>
  )
}
