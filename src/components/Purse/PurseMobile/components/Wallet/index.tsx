import React, { FC } from 'react'
import styles from './styles.module.scss'

import { walletSvg, buttonClose } from '../../images'

type WalletPropsType = {
  onCloseClick: () => void
}

export const Wallet: FC<WalletPropsType> = (props) => {
  return (
    <div className={styles.wallet}>
      <p className={styles.wallet__title}>Привяжите внешние кошельки</p>
      <img src={walletSvg} className={styles.wallet__image} />

      <button className={styles.wallet__closeBtn} onClick={props.onCloseClick}>
        <img src={buttonClose} className={styles.wallet__closeImage} />
      </button>
    </div>
  )
}
