import React from 'react'
import Styles from './style.module.scss'
import classNames from 'classnames/bind'

export const TableComponent = ({ children, className = '' }) => {
  const tableClass = classNames(`${className}`, Styles.table_container)

  return <div className={tableClass}>{children}</div>
}
