import React, { ReactNode } from 'react'
import { TableCell, withStyles } from '@material-ui/core'
import clsx from 'clsx'

const CollapseCell = withStyles(() => ({
  root: {
    maxWidth: '360px',
    position: 'relative',
    verticalAlign: 'middle',
    top: '-16px',
    padding: '7px 16px',
    fontSize: 14,
    fontFamily: ['IbmPlexSans', 'Arial'].join(','),
    fontWeight: 500,
    border: 'none',
    backgroundColor: '#1E3436',
    color: '#A4A4A4',
    zIndex: 0,
    '&#first': {
      paddingTop: 32,
    },
    '&#last': {
      paddingBottom: 14,
    },
    '&#last:first-child': {
      borderBottomLeftRadius: 20,
    },
    '&#last:last-child': {
      borderBottomRightRadius: 20,
    },
  },
}))(TableCell)

export interface IStyledCollapseCell {
  children?: ReactNode
  className?: string
  index?: number
  length?: number
  colSpan?: number
}

export const StyledCollapseCell: React.FC<IStyledCollapseCell> = ({ children, className, index, length, colSpan }) => {
  const id = clsx({
    first: index === 0,
    last: length - 1 === index,
  })

  return (
    <CollapseCell colSpan={colSpan} className={className} id={id}>
      {children}
    </CollapseCell>
  )
}
