import React, { useState } from 'react'
import styles from './styles.module.scss'
import { details1, details2, details3 } from '../../images'
import { Modal } from '../Modal/index'
import { DetalizationUp } from './components/DetalizationUp/index'
import { DetalizationDownItem } from './components/DetalizationDownItem/index'
import { ModalHeader } from '../ModalHeader'
import BlueArrow from '../../images/BlueArrow/BlueArrow'
import thddIcon from '@icons/thdd.png'
import tsilicoinIcon from '@icons/tsilicoin.png'
import tfloraIcon from '@icons/tflora.png'
import tgreendogeIcon from '@icons/tgreendoge.png'
import tstaiIcon from '@icons/tstai.png'
import tappleIcon from '@icons/tapple.png'
import tmaizeIcon from '@icons/tmaize.png'
import tkaleIcon from '@icons/tkale.png'
import tavacadoIcon from '@icons/tavacado.png'
import tsocksIcon from '@icons/tsocks.png'
import ttacoIcon from '@icons/ttaco.png'
import ttadIcon from '@icons/ttad.png'
import cactusIcon from '@icons/cactusIcon.png'
import covidIcon from '@icons/covidIcon.png'
import senoIcon from '@icons/senoIcon.png'
import chaingreenIcon from '@icons/chaingreen.png'
import goji from '@icons/gojiIcon.png'
import useWindowSize from '@helpers/useWindowSizeHook'
import { useTranslation } from 'react-i18next'

export const Details = () => {
  const [t] = useTranslation()
  const { width } = useWindowSize()
  const desktop = width >= 767
  const [isModalVisible, setIsModalVisible] = useState(false)
  // let flagForDetalisation = 3

  const handleDetailsOpenClick = () => {
    setIsModalVisible(true)
  }

  const handleDetailsCloseClick = () => {
    setIsModalVisible(false)
  }

  const tempData = [
    { img: details1, title: 'Chia', subtitle: 'XCH', number: 0, money: '$0' },
    { img: details2, title: 'Flax', subtitle: 'XFX', number: 0, money: '$0' },
    { img: details3, title: 'N-Chain', subtitle: 'NCH', number: 0, money: '$0' },
    { img: tsocksIcon, title: 'Socks', subtitle: 'SOCK', number: 0, money: '$0' },
    { img: tkaleIcon, title: 'Kale', subtitle: 'XKA', number: 0, money: '$0' },
    { img: ttacoIcon, title: 'Taco', subtitle: 'XTX', number: 0, money: '$0' },
    { img: tstaiIcon, title: 'staicoin', subtitle: 'STAI', number: 0, money: '$0' },
    { img: tappleIcon, title: 'Apple', subtitle: 'APPLE', number: 0, money: '$0' },
    { img: goji, title: 'Goji', subtitle: 'GOJ', number: 0, money: '$0' },
    { img: tsilicoinIcon, title: 'Silicoin', subtitle: '', number: 0, money: '$0' },
    { img: chaingreenIcon, title: 'chaingreen', subtitle: '', number: 0, money: '$0' },
    { img: tmaizeIcon, title: 'Maize', subtitle: 'XMZ', number: 0, money: '$0' },
    { img: senoIcon, title: 'Seno', subtitle: 'XSE', number: 0, money: '$0' },
    { img: covidIcon, title: 'Covid', subtitle: 'COV', number: 0, money: '$0' },
    { img: cactusIcon, title: 'Cactus', subtitle: 'CAC', number: 0, money: '$0' },
    { img: thddIcon, title: 'HDDcoin', subtitle: 'HDD', number: 0, money: '$0' },
    { img: tfloraIcon, title: 'FLORA', subtitle: 'NCH', number: 0, money: '$0' },
    { img: tgreendogeIcon, title: 'GreenDoge', subtitle: 'GDOG', number: 0, money: '$0' },
    { img: ttadIcon, title: 'TAD', subtitle: 'TAD', number: 0, money: '$0' },
    { img: tavacadoIcon, title: 'Avocado', subtitle: 'AVO', number: 0, money: '$0' },
  ]

  return (
    <div className={styles.details}>
      <header className={styles.details__header}>
        <h3 className={styles.details__title}>{t('purse_mainingDetails')}</h3>
        <DetalizationUp summary='$0' xch='$0' forks='$0' />

        <button type='button' className={styles.details__button} onClick={handleDetailsOpenClick}>
          <BlueArrow />
        </button>

        <Modal active={isModalVisible} setActive={handleDetailsCloseClick}>
          <ul className={styles.detailsModal}>
            <ModalHeader title={t('purse_mainingDetails')} onClick={handleDetailsCloseClick} />
            <DetalizationUp summary='$0' xch='$0' forks='$0' />
            {/* <p className={styles.transactions__subtitle}>
              {t('purse_noTransactionsYet')} <br />
              Мы предоставим вам доступ позже
            </p> */}
            <button type='button' className={styles.transactions__profileButton} onClick={handleDetailsCloseClick}>
              {t('purse_getBack')}
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
          // Такая чехарда, потому что в основном лендинге должно быть только 3 карточки, а уже в детализации все
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
      {/* {desktop ? (
        <ul className={styles.detailsList}>
          {tempData.map((item) => {
            // Такая чехарда, потому что в основном лендинге должно быть только 3 карточки, а уже в детализации все
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
      ) : null} */}
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
