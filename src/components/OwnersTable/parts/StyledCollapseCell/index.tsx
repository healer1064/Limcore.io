import React, { ReactNode } from 'react'
import { TableCell, withStyles } from '@material-ui/core'

const CollapseCell = withStyles(() => ({
  root: {
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
  id?: string
  className?: string
}

export const StyledCollapseCell: React.FC<IStyledCollapseCell> = ({ children, className, id }) => {
  return (
    <CollapseCell className={className} id={id}>
      {children}
    </CollapseCell>
  )
}
