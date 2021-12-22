import React, { useState } from 'react'
import styles from './styles.module.scss'
import { dotsBlue } from '@components/Purse/PurseMobile/images'
import { BottomModal } from '@components/Modal/BottomModal'
import { DetalizationButtons } from '../DetalizationButtons/index'

export const DetalizationDownItem = ({ img, title, subtitle, number, money, flagForButton }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleDotsOpenClick = () => {
    setIsModalVisible(true)
  }
  const handleDotsCloseClick = () => {
    setIsModalVisible(false)
  }
  return (
    <li className={styles.detailsItem}>
      <img src={img} className={styles.detailsImage} alt='icon' />
      <span className={styles.columnText}>
        <p className={styles.columnText__title}>{title}</p>
        <p className={styles.columnText__text}>{subtitle}</p>
      </span>
      <span className={styles.columnData}>
        <p className={styles.columnData__title}>{number}</p>
        <p className={styles.columnData__text}>{money}</p>
      </span>
      {flagForButton && (
        <>
          <button className={styles.dots} onClick={handleDotsOpenClick} type='button'>
            <img src={dotsBlue} alt='dot' />
          </button>

          <BottomModal active={isModalVisible} setActive={handleDotsCloseClick}>
            <DetalizationButtons />
          </BottomModal>
        </>
      )}
    </li>
  )
}
