import React from 'react'
import Styles from './styles.module.scss'

import amdIcon from '@icons/amd-epyc.svg'
import blockchainIcon from '@icons/blockchain-life.svg'
import supermicrIcon from '@icons/supermicr.svg'
import softlineIcon from '@icons/softline.svg'

export const MainParthers: React.FC = () => {
  return (
    <div className={Styles.parthers}>
      <img src={blockchainIcon} alt='Иконка' />
      <img src={amdIcon} alt='Иконка' />
      <img src={softlineIcon} alt='Иконка' />
      <img src={supermicrIcon} alt='Иконка' />
    </div>
  )
}
