import React, { FC, useRef, useState } from 'react'
import styles from './styles.module.scss'

import { walletSvg } from '../../images'
import GrayCrossIcon from '../../images/GrayCross/GrayCrossIcon'
import { ArrowRight } from '@icons/ArrowRight'
import { ArrowLeft } from '@icons/ArrowLeft'

// type WalletPropsType = {}

export const Wallet = () => {
  // const roadmapRef = useRef<HTMLDivElement>(null)
  const [isArrowHidden, setIsArrowHidden] = useState(true)
  // const scrollLeft = () => {
  //   roadmapRef.current.scrollLeft += 300
  //   if (roadmapRef.current.scrollLeft !== 0) {
  //     setIsArrowHidden(false)
  //   }
  // }
  // const scrollRight = () => {
  //   roadmapRef.current.scrollLeft -= 300
  //   if (roadmapRef.current.scrollLeft === 0) {
  //     setIsArrowHidden(true)
  //   }
  // }
  return (
    <div className={styles.wallet}>
      <p className={styles.wallet__title}>Привяжите внешние кошельки</p>
      <p className={styles.wallet__subtitle}>Добавляйте свои внешние кошельки к форкам </p>
      <img src={walletSvg} className={styles.wallet__image} />
      <button className={styles.moreButton} type='button'>
        Подробнее
      </button>
      <button className={`${styles.scrollButton} ${styles.scrollButtonLeft}`} type='button'>
        <ArrowRight className={styles.scrollIcon} />
      </button>
      <button
        className={`${styles.scrollButton} ${styles.scrollButtonRight} ${isArrowHidden && styles.arrowHidden}`}
        type='button'
      >
        <ArrowLeft className={styles.scrollIcon} />
      </button>
    </div>
  )
}
