import React, { useState } from 'react'
import styles from './styles.module.scss'
import { details1, details2, details3 } from '../../images'
import { Modal } from '../Modal/index'
import { DetalizationUp } from './components/DetalizationUp/index'
import { DetalizationDownItem } from './components/DetalizationDownItem/index'
import { ModalHeader } from '../ModalHeader'
import BlueArrow from '../../images/BlueArrow/BlueArrow'

export const Details = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  // let flagForDetalisation = 3

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
    { img: details2, title: 'Flax', subtitle: 'XFX', number: 0.76459083, money: '$29' },
  ]

  return (
    <div className={styles.details}>
      <header className={styles.details__header}>
        <DetalizationUp summary='$0' xch='$0' forks='$0' />
        <Modal active={isModalVisible} setActive={handleDetailsCloseClick}>
          <ul className={styles.detailsModal}>
            <ModalHeader title='Детализация майнинга' onClick={handleDetailsCloseClick} />
            <DetalizationUp summary='$0' xch='$0' forks='$0' />
            <p className={styles.transactions__subtitle}>
              У вас еще нет транзакций. <br />
              Мы предоставим вам доступ позже
            </p>
            <button type='button' className={styles.transactions__profileButton} onClick={handleDetailsCloseClick}>
              Вернуться назад
            </button>
            {/* {tempData.map((item) => (
              <DetalizationDownItem
                img={item.img}
                title={item.title}
                subtitle={item.subtitle}
                number={item.number}
                money={item.money}
                key={Math.random()}
                flagForButton
              />
            ))} */}
          </ul>
        </Modal>
      </header>
      <ul className={styles.detailsList}>
        {tempData.map((item) => {
          return (
            <DetalizationDownItem
              img={item.img}
              title={item.title}
              subtitle={item.subtitle}
              number={item.number}
              money={item.money}
              key={Math.random()}
              flagForButton={false}
            />
          )
        })}
      </ul>
      {/* <ul className={styles.detailsList}>
        {tempData.map((item) => {
          // Такая чехарда, потому что в основном лендинге должно быть только 3 карточки, а уже в детализации все
          flagForDetalisation--
          if (flagForDetalisation === -1) {
            return
          }
          return (
            <DetalizationDownItem
              img={item.img}
              title={item.title}
              subtitle={item.subtitle}
              number={item.number}
              money={item.money}
              key={Math.random()}
              flagForButton={false}
            />
          )
        })}
      </ul> */}
      {/* TODO: 2 цикла - не хорошо, надо поправить */}
    </div>
  )
}
