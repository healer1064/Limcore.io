import React from 'react'
import Styles from '../style.module.scss'

export const TableText = (props) => {
  const textStyle = props.className ? `${Styles.table_text} ${props.className}` : `${Styles.table_text}`

  return <span className={textStyle}>{props?.value || 'Нет данных'}</span>
}
