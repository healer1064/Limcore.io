import React from 'react'
import classNames from 'classnames/bind'
import Styles from '../style.module.scss'

interface CellProps {
  onClick?: (e: any) => void
  className?: string
}

export const Cell: React.FC<CellProps> = (props) => {
  const { className = '' } = props
  const cellClass = classNames(`${className}`, Styles.table_cell)

  return (
    <div role='presentation' onClick={props.onClick} className={cellClass}>
      {props.children}
    </div>
  )
}
