import React from 'react'
import Styles from './styles.module.scss'

import { ButtonBig } from '../../../../../../ui-kit/ButtonBig'

import limcoreIcon from '@icons/limcore.svg'
import infoIcon from '@icons/info-icon.svg'
import etherscanIcon from '@icons/etherscan.png'

export const MainRounds: React.FC = () => {
  return (
    <div className={Styles.rounds}>
      <div className={Styles.block}>
        <div className={Styles.wrap}>
          <span className={Styles.name}>Раунд №1</span>
        </div>
        <ul className={Styles.list}>
          <li className={Styles.item}>
            <span className={Styles.designation}>Лимит</span>
            <span className={Styles.value}>80,000 LIMC</span>
            <img className={Styles.icon} src={limcoreIcon} alt='Иконка' />
          </li>
          <li className={Styles.item}>
            <span className={Styles.designation}>Цена за 1 LIMC</span>
            <span className={Styles.value}>$95</span>
          </li>
          <li className={Styles.item}>
            <span className={Styles.designation}>Сроки</span>
            <span className={Styles.value}>27.10.2021 — 30.12.21</span>
            <img className={Styles.icon} src={infoIcon} alt='Иконка' />
          </li>
        </ul>
      </div>
      <div className={Styles.container}>
        <div className={Styles.progress}>
          <span className={Styles.bar}>{}</span>
          <span className={Styles.count}>78,000 / 80,000</span>
        </div>
        <img src={etherscanIcon} alt='Иконка' />
      </div>
      <div className={Styles.buttons}>
        <div className={Styles.column}>
          <button className={Styles.second}>Купить LIMC</button>
          <span>Lock-up период 6 месяцев</span>
        </div>
        <div className={Styles.column}>
          <ButtonBig className={Styles.button}>Калькулятор доходности</ButtonBig>
        </div>
      </div>
      <div className={Styles.road}>
        <div className={Styles.cover}>
          <div className={Styles.round}>
            <span>Раунд №2</span>
            <div className={Styles.row}>
              <span>LIMC (min $110)</span>
              <span>120,000</span>
            </div>
          </div>
          <div className={Styles.round}>
            <span>Раунд №3</span>
            <div className={Styles.row}>
              <span>LIMC (price and limit later)</span>
            </div>
          </div>
          <div className={Styles.round}>
            <span>Раунд №4</span>
            <div className={Styles.row}>
              <span>LIMC (price and limit later)</span>
            </div>
          </div>
          <div className={Styles.round}>
            <span>Раунд №5 (Final)</span>
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
