import React, { FC } from 'react'
import styles from './styles.module.scss'

import { walletSvg } from '../../images'
import GrayCrossIcon from '../../images/GrayCross/GrayCrossIcon'

type WalletPropsType = {
  onCloseClick: () => void
}

export const Wallet: FC<WalletPropsType> = (props) => {
  return (
    <div className={styles.wallet}>
      <p className={styles.wallet__title}>Привяжите внешние кошельки</p>
      <img src={walletSvg} className={styles.wallet__image} />

      <button className={styles.wallet__closeBtn} onClick={props.onCloseClick}>
        {/* <img src={buttonClose} className={styles.wallet__closeImage} /> */}
        <GrayCrossIcon />
      </button>
    </div>
  )
}
