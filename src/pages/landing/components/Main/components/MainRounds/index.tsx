import React, { useEffect, useState } from 'react'
import Styles from './styles.module.scss'

import { ButtonBig } from '../../../../../../ui-kit/ButtonBig'
import { PopupMainPage } from '../PopupMainPage'
import PopupStyles from '../PopupMainPage/styles.module.scss'

import limcoreIcon from '@icons/limcore.svg'
import { InfoIcon } from '@icons/InfoIcon'
import etherscanIcon from '@icons/etherscan1.png'
import useWindowSize from '@helpers/useWindowSizeHook'
import { useHistory } from 'react-router'
import ModalAuth from '../../../../../../pages/landing/components/ModalAuth'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setIsBuyLimcClick } from '../../../../../../pages/auth/redux/auth.slice'
import Countdown from 'react-countdown'

export const MainRounds: React.FC = () => {
  const limcCount = useAppSelector((state) => state.wallet.limcCount)
  const limcLimit = useAppSelector((state) => state.wallet.limcLimit)
  const [popupOpen, setPopupOpen] = useState(false)
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false)
  const dispatch = useAppDispatch()
  const history = useHistory()
  const { width } = useWindowSize()
  const desktop = width >= 768

  const closePopup = () => {
    setPopupOpen(false)
  }
  const openPopup = () => {
    setPopupOpen(true)
  }

  const handleLoginModalOpen = () => {
    dispatch(setIsBuyLimcClick(true))
    desktop ? setIsLoginModalVisible(true) : history.push('/auth')
  }
  const handleLoginModalClose = () => {
    setIsLoginModalVisible(false)
  }
  return (
    <div className={Styles.rounds}>
      <div className={Styles.block}>
        <div className={Styles.wrap}>
          <span className={Styles.name}>Раунд №1</span>
        </div>
        <p className={Styles.temporarily}>Запуск сайта и начало Round 1 продаж токена LIMC</p>
        <p className={Styles.temporarily}>
          <Countdown date='2021-11-05T18:00:00' />
        </p>
        <ul className={Styles.list}>
          <li className={Styles.item}>
            <span className={Styles.designation}>Лимит</span>
            <span className={Styles.value}>{limcLimit} LIMC</span>
            <img className={Styles.icon} src={limcoreIcon} alt='Иконка' />
          </li>
          <li className={Styles.item}>
            <span className={Styles.designation}>Цена за 1 LIMC</span>
            <span className={Styles.value}>$95</span>
          </li>
          <li className={Styles.item}>
            <span className={Styles.designation}>Сроки</span>
            <span className={Styles.value}>05.11.2021 — 30.12.21</span>
            <InfoIcon className={Styles.icon} onClick={openPopup} />
          </li>
        </ul>
      </div>
      <PopupMainPage closePopup={closePopup} popupOpen={popupOpen} className={PopupStyles.popup_round}>
        <p className={PopupStyles.text}>
          Майнинг начинается спустя 80 дней с момента завершения раунда. Раунд может закончиться раньше указанного срока
        </p>
      </PopupMainPage>
      <div className={Styles.container}>
        <div className={Styles.progress}>
          <span className={Styles.bar}>{}</span>
          <span className={Styles.count}>
            {limcCount} / {limcLimit}
          </span>
        </div>
        <a
          target='blank'
          rel='noopener noreferrer'
          className={Styles.etherscanLink}
          href='https://etherscan.io/address/0x3cba6aa21ef433347c27864035f711a9fd4a3eed'
        >
          <img className={Styles.etherscanIcon} src={etherscanIcon} alt='Иконка' />
          <span className={Styles.etherscan}>Etherscan</span>
        </a>
      </div>
      <div className={Styles.buttons}>
        <div className={Styles.column}>
          <button className={Styles.second} onClick={handleLoginModalOpen}>
            Купить LIMC
          </button>
          <span>Lock-up период 6 месяцев</span>

          {desktop && <ModalAuth isVisible={isLoginModalVisible} setModalClose={handleLoginModalClose} />}
        </div>
        <div className={Styles.column}>
          <ButtonBig className={Styles.button}>Калькулятор доходности</ButtonBig>
        </div>
      </div>
      <div className={Styles.roadContainer}>
        <div className={Styles.emptyContainers}>
          <div className={Styles.emptyContainer_first} />
          <div className={Styles.emptyContainer} />
        </div>
        <div className={Styles.road}>
          <div className={Styles.cover}>
            <div className={Styles.round}>
              <span className={Styles.subtitle}>Раунд №2</span>
              <div className={Styles.row}>
                <span>LIMC (min $110)</span>
                <span>120,000</span>
              </div>
            </div>
            <div className={Styles.round}>
              <span className={Styles.subtitle}>Раунд №3</span>
              <div className={Styles.row}>
                <span>LIMC (price and limit later)</span>
              </div>
            </div>
            <div className={Styles.round}>
              <span className={Styles.subtitle}>Раунд №4</span>
              <div className={Styles.row}>
                <span>LIMC (price and limit later)</span>
              </div>
            </div>
            <div className={Styles.round}>
              <span className={Styles.subtitle}>Раунд №5 (Final)</span>
              <div className={Styles.row}>
                <span>LIMC (price and limit later)</span>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.shell}>
          <div className={Styles.lines}>
            <div className={Styles.line}>{}</div>
            <div className={Styles.line}>{}</div>
          </div>
          <div className={Styles.dates}>
            <div className={Styles.date}>
              <span>10.01.2022</span>
            </div>
            <div className={Styles.date}>
              <span>25.02.2022</span>
              <span>конец 2022</span>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.info}>
        <p className={Styles.description}>
          Лимит токенов в каждом раунде напрямую зависит от готовности нашей инфраструктуры и производственной мощности
          заводов изготовителей серверного оборудования. С каждым раундом LIMC продаётся дороже, из-за нашего
          постепенного увеличения объемов майнинговых мощностей (терабайт) закреплённых за каждым токеном LIMC
        </p>
        <p className={Styles.description}>
          Стоимость и лимиты для Раундов №3,4,5 будут опубликованы позже, т.к. на момент последнего обновления нашего
          сайта мы не получили гарантированное количество получаемого нами оборудования от заводов изготовителей к
          планируемым датам завершения раундов
        </p>
      </div>
    </div>
  )
}
