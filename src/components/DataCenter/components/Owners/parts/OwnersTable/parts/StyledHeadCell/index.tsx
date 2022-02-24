import React, { ReactNode } from 'react'
import { withStyles, TableCell } from '@material-ui/core'

const StyledCell = withStyles(() => ({
  root: {
    fontFamily: ['IbmPlexSans', 'Arial'].join(','),
    border: 'none',
    padding: '10px 7px',
  },
  head: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '22px',
    color: '#4F848A',
  },
}))(TableCell)

export interface IStyledHeadCell {
  children?: ReactNode
  className?: string
}

export const StyledHeadCell: React.FC<IStyledHeadCell> = ({ children, className }) => {
  return <StyledCell className={className}>{children}</StyledCell>
}
