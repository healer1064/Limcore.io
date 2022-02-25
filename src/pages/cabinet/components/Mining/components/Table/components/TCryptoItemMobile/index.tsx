import React from 'react'

import styles from './styles.module.scss'
import cryptoPurseYellowIcon from '@icons/cryptoPurseYellowIcon.svg'
import unionIcon from '@icons/unionIcon.svg'
import { Coin } from '../../mockData'
import { CheckMark } from '../../../../../../../../ui-kit/CheckMark'
import { OtherButton } from '../OtherButton'

interface TCryptoItemMobileProps {
  onChange: () => unknown
  onClickModalOpen: () => unknown
  checked: boolean
  coin: Coin
}

export const TCryptoItemMobile: React.FC<TCryptoItemMobileProps> = ({ onChange, onClickModalOpen, checked, coin }) => {
  return (
    <>
      <div className={styles.TCryptoItemMobile__head}>
        <div>
          <CheckMark onChange={onChange} value={checked} icon={coin.icon} />
          <p>{coin.name}</p>
          <p>{coin.suffix}</p>
          <div>
            {coin.cryptoPurse && <img className='purse' src={cryptoPurseYellowIcon} />}
            {coin.union && <img className='union' src={unionIcon} />}
          </div>
        </div>
        <div>
          <OtherButton onClick={onClickModalOpen} />
        </div>
      </div>
      <div className={styles.TCryptoItemMobile__flexStats} style={{ margin: '10px 0 0 0' }}>
        <p>Стоимость</p>
        <p>${coin.cost}</p>
      </div>
      <div className={styles.TCryptoItemMobile__flexStats}>
        <p>Баланс</p>
        <div>
          {coin.balance}/<span className={styles.TCryptoItemMobile__greenP}>+{coin.earning.percentage}</span>
        </div>
      </div>
      <div className={styles.TCryptoItemMobile__flexStats}>
        <p>Сумма</p>
        <p>
          ${coin.sum}/<span className={styles.TCryptoItemMobile__greenP}>+${coin.earning.actually}</span>
        </p>
      </div>
    </>
  )
}
