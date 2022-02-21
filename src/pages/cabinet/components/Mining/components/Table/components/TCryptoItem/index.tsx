import React, { useState } from 'react'
import { Checkbox } from '@material-ui/core'

import styles from './styles.module.scss'
import { Coin } from '../../mockData'
import cryptoPurseYellowIcon from '@icons/cryptoPurseYellowIcon.svg'
import unionIcon from '@icons/unionIcon.svg'
import { OtherButton } from '../OtherButton'

interface TCryptoItemProps {
  onChange: () => unknown
  checked: boolean
  coin: Coin
}

export const TCryptoItem: React.FC<TCryptoItemProps> = ({ onChange, checked, coin }) => {
  const [isHover, setHover] = useState<boolean>(false)

  const onMouseEnterCheckbox = () => {
    setHover(() => true)
  }
  const onMouseLeaveCheckbox = () => {
    setHover(() => false)
  }

  return (
    <>
      <div>
        <Checkbox
          style={{ color: isHover ? '#26dff8' : 'rgba(79, 132, 138, 1)', padding: 0, transition: 'color 0.5s ease' }}
          onMouseEnter={onMouseEnterCheckbox}
          onMouseLeave={onMouseLeaveCheckbox}
          onChange={onChange}
          checked={checked}
        />
      </div>
      <div className={styles.asset}>
        <img src={coin.icon} />
        {coin.name}
        <p>{coin.suffix}</p>
        <div>
          {coin.cryptoPurse && <img className='purse' src={cryptoPurseYellowIcon} />}
          {coin.union && <img className='union' src={unionIcon} />}
        </div>
      </div>
      <div>${coin.cost}</div>
      <div>{coin.balance}</div>
      <div>${coin.sum}</div>
      <div className={styles.earning}>
        +{coin.earning.percentage}/+${coin.earning.actually}
      </div>
      <div className={styles.other}>
        <OtherButton />
      </div>
    </>
  )
}
