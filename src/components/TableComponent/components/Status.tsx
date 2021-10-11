import React from 'react'
import Styles from '../style.module.scss'

import { STATUS_COLOR, STATUS_NAME } from '../../../pages/orders/constants'

export const Status = (props) => {
  const color = Object.keys(STATUS_COLOR)[Object.values(STATUS_NAME).indexOf(props?.statusText)]
  return (
    <div className={Styles.status_container}>
      <div
        className={Styles.status_content}
        style={{
          borderColor: STATUS_COLOR[color] || '#000000',
          color: STATUS_COLOR[color] || '#000000',
        }}
      >
        <span className={Styles.status_text}>{props?.statusText}</span>
      </div>
    </div>
  )
}
