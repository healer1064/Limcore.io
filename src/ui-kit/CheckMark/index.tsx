import React from 'react'

import styles from './styles.module.scss'
import { CheckMarkWhite } from '@icons/checkMarkWhite'

interface CheckMarkProps {
  onChange: (value: boolean) => unknown
  value: boolean
  icon?: string
}

export const CheckMark: React.FC<CheckMarkProps> = ({ onChange, value, icon }) => {
  const onClick = () => {
    onChange(!value)
  }

  if (icon) {
    return (
      <>
        {!value ? (
          <img src={icon} width={40} height={40} onClick={onClick} />
        ) : (
          <div className={styles.checkMark} style={{ background: 'rgba(38, 223, 248, 1)' }} onClick={onClick}>
            <CheckMarkWhite className='THeadMobile__checkMarkSVG' checked={value} />
          </div>
        )}
      </>
    )
  }

  return (
    <div
      className={styles.checkMark}
      style={{ background: value ? 'rgba(38, 223, 248, 1)' : 'rgba(41, 69, 72, 1)' }}
      onClick={onClick}
    >
      <CheckMarkWhite className='THeadMobile__checkMarkSVG' checked={value} />
    </div>
  )
}
