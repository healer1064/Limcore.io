import React from 'react'

import styles from './styles.module.scss'
import { CheckMark } from '../../../../../../../../ui-kit/CheckMark'
import { Button } from '../../../Button'

interface THeadMobileProps {
  checked: boolean
  onChangeSelectedCoins: () => unknown
}

export const THeadMobile: React.FC<THeadMobileProps> = ({ checked, onChangeSelectedCoins }) => {
  return (
    <div className={styles.THeadMobile}>
      <CheckMark value={checked} onChange={onChangeSelectedCoins} />
      <Button type='none' text='Продать вручную' />
      <Button type='none' text='Автоматически' />
    </div>
  )
}
