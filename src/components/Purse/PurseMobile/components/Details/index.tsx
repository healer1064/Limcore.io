import React, { useState } from 'react'
import styles from './styles.module.scss'
import { blueArrow, details1, details2, details3 } from '../../images'
import { Modal } from '../Modal/index'
import { DetalizationUp } from './components/DetalizationUp/index'
import { DetalizationDown } from './components/DetalizationDown/index'
import { ModalHeader } from '../ModalHeader'

export const Details = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleDetailsOpenClick = () => {
    setIsModalVisible(true)
  }

  const handleDetailsCloseClick = () => {
    setIsModalVisible(false)
  }

  const tempData = [
    { img: details1, title: 'Chia', subtitle: 'XCH', number: 3.78456983, money: '$384' },
    { img: details2, title: 'Flax', subtitle: 'XFX', number: 0.76459083, money: '$29' },
    { img: details3, title: 'N-Chain', subtitle: 'NCH', number: 1.04856979, money: '$84' },
  ]

  return (
    <div className={styles.details}>
      <header className={styles.details__header}>
        <h3 className={styles.details__title}>Детализация майнинга</h3>
        <DetalizationUp summary='+$12,784' xch='+$10,092' forks='+$884' />

        <button type='button' className={styles.details__button} onClick={handleDetailsOpenClick}>
          <img src={blueArrow} />
        </button>

        <Modal active={isModalVisible} setActive={handleDetailsCloseClick}>
          <div className={styles.detailsModal}>
            <ModalHeader title='Детализация майнинга' onClick={handleDetailsCloseClick} />
            <DetalizationUp summary='+$12,784' xch='+$10,092' forks='+$884' />
            {tempData.map((item) => (
              <DetalizationDown
                img={item.img}
                title={item.title}
                subtitle={item.subtitle}
                number={item.number}
                money={item.money}
                key={Math.random()}
              />
            ))}
          </div>
        </Modal>
      </header>
      {/* <DetalizationDown /> */}
      {/* 2 цикла - нехорошо, в main-lending надо вывести первые 3 элемента, в подробные - остальные, возможно надо разделить компоненты все-таки или написать новый DetalizationDown */}
    </div>
  )
}
