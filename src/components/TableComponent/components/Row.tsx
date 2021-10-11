import React from 'react'
import Styles from '../style.module.scss'
import classNames from 'classnames/bind'

export const RowTable = (props) => {
  const rowClassNames = classNames(`${props.className}`, `${Styles?.table_row}`)
  const rowContentClass = classNames(`${props.contentClassName}`, `${Styles?.row_content}`)
  return (
    <div className={rowClassNames}>
      <div className={rowContentClass}>{props.children}</div>
    </div>
  )
}
