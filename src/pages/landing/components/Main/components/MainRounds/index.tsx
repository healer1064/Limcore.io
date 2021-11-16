import React, { useState } from 'react'
import Styles from './styles.module.scss'

import { ButtonBig } from '../../../../../../ui-kit/ButtonBig'
import { PopupMainPage } from '../PopupMainPage'
import PopupStyles from '../PopupMainPage/styles.module.scss'
import { Link } from 'react-scroll'
import TGIcon from '@icons/TGIcon.svg'

import limcoreIcon from '@icons/limcore.svg'
import { InfoIcon } from '@icons/InfoIcon'
import etherscanIcon from '@icons/etherscan1.png'
import useWindowSize from '@helpers/useWindowSizeHook'
import { useHistory } from 'react-router'
import ModalAuth from '../../../../../../pages/landing/components/ModalAuth'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setIsBuyLimcClick } from '../../../../../../pages/auth/redux/auth.slice'
import { useTranslation } from 'react-i18next'

export const MainRounds: React.FC = () => {
  // const limcCount = useAppSelector((state) => state.wallet.limcCount)
  const limcCount = useAppSelector((state) => state.authNew.walletConnectSoldLimcs)
  const limcLimit = useAppSelector((state) => state.wallet.limcLimit)
  const [popupOpen, setPopupOpen] = useState(false)
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false)
  const dispatch = useAppDispatch()
  const history = useHistory()
  const { width } = useWindowSize()
  const [t] = useTranslation()
  const desktop = width >= 768

  // x =18 по мск
  // y = разница с мск
  // z = x + y - во сколько по местному времени должен сработать таймер
  // T = z - date.now()  - остаток времени до истечения таймера ( z нужно перевести в милисекунды)
  // кидаем T в счетчик в милисекундах    1580518923000 // Timestamp in milliseconds

  const date = new Date()

  const x = 18
  const y = Math.abs(date.getTimezoneOffset() / 60) - 3 // разница с мск, можно взять пояс чела и с +3 ковырнуть
  const z = new Date(2021, 10, 5, x + y, 0, 0, 0) // время в которое срабатывает таймер

  // console.log(`y = ${y}`)
  // console.log(`z = ${z}`)
  // console.log(`T = ${T}`)

  // const date = new Date()
  // let day = '05'
  // let local = Math.abs(date.getTimezoneOffset() / 60)
  // console.log(`local - ${local}`)
  // let resultHour = 15 + local
  // нужна разница между его временем и временем по мск

  // if (resultHour > 23) {
  //   local = 3
  //   resultHour = 15 + local
  //   day = '06'
  // }
  // console.log(`resultHour - ${resultHour}`)

  const closePopup = () => {
    setPopupOpen(false)
  }
  const openPopup = () => {
    setPopupOpen(true)
  }

  // const handleLoginModalOpen = () => {
  //   dispatch(setIsBuyLimcClick(true))
  //   desktop ? setIsLoginModalVisible(true) : history.push('/auth')
  // }
  // const handleLoginModalClose = () => {
  //   setIsLoginModalVisible(false)
  // }

  return (
    <div className={Styles.rounds}>
      <div className={Styles.block}>
        <div className={Styles.wrap}>
          <span className={Styles.name}>{t('firstRound_round1')}</span>
        </div>
        <ul className={Styles.list}>
          <li className={Styles.item}>
            <span className={Styles.designation}>{t('firstRound_limit')}</span>
            <span className={Styles.value}>{limcLimit} LIMC</span>
            <img className={Styles.icon} src={limcoreIcon} alt='Иконка' />
          </li>
          <li className={Styles.item}>
            <span className={Styles.designation}>{t('firstRound_limcPrice')}</span>
            <span className={Styles.value}>$95</span>
          </li>
          <li className={Styles.item}>
            <span className={Styles.designation}>{t('firstRound_terms')}</span>
            <span className={Styles.value}>{t('firstRound_firstRoundTerms')}</span>
            <InfoIcon className={Styles.icon} onClick={openPopup} />
          </li>
        </ul>
      </div>
      <PopupMainPage closePopup={closePopup} popupOpen={popupOpen} className={PopupStyles.popup_round}>
        <p className={PopupStyles.text}>{t('purse_mainingStart')}</p>
      </PopupMainPage>
      <div className={Styles.progress}>
        <span className={Styles.bar}>{}</span>
        <span className={Styles.count}>{limcCount} / 80000</span>
      </div>
      <div className={Styles.wrapp}>
        <a href='https://round1.limcore.io' className={Styles.buy}>
          {t('buyLimc')}
        </a>
        <span>{t('lockUp')}</span>
      </div>
      {/* <div className={Styles.tempDeclaration}>
        <h4 className={Styles.tempDeclaration__title}>{t('firstRound_startSelling')}</h4>
        <div>
          <p className={Styles.tempDeclaration__paragraph}>{t('firstRound_followNews')}</p>
          <div>
            <img className={Styles.tempDeclaration__icon} src={TGIcon} alt='telegram_icon' />
            <a className={Styles.tempDeclaration__link} href='https://t.me/limc_russ' target='_blank' rel='noreferrer'>
              @limc_russ
            </a>
          </div>
        </div>
      </div> */}
      <div className={Styles.roadContainer}>
        <div className={Styles.emptyContainers}>
          <div className={Styles.emptyContainer_first} />
          <div className={Styles.emptyContainer} />
        </div>
        <div className={Styles.road}>
          <div className={Styles.cover}>
            <div className={Styles.round}>
              <span className={Styles.date__mobile}>10.01.2022</span>
              <span className={Styles.subtitle}>{t('roundsRoadmap_round2')}</span>
              <div className={Styles.row}>
                <span>LIMC (min $110)</span>
                <span>120,000</span>
              </div>
            </div>
            <div className={Styles.round}>
              <span className={Styles.date__mobile}>25.02.2022</span>
              <span className={Styles.subtitle}>{t('roundsRoadmap_round3')}</span>
              <div className={Styles.row}>
                <span>LIMC (price and limit later)</span>
              </div>
            </div>
            <div className={Styles.round}>
              <span className={Styles.subtitle}>{t('roundsRoadmap_round4')}</span>
              <div className={Styles.row}>
                <span>LIMC (price and limit later)</span>
              </div>
            </div>
            <div className={Styles.round}>
              <span className={Styles.subtitle}>{t('roundsRoadmap_round5')}</span>
              <div className={Styles.row}>
                <span>LIMC (price and limit later)</span>
              </div>
            </div>
            <span className={Styles.date__mobile}>{t('roundsRoadmap_endSelling')}</span>
          </div>
        </div>
        <div className={Styles.shell}>
          <div className={Styles.lines}>
            <div className={Styles.line}>{}</div>
            <div className={Styles.line}>{}</div>
          </div>
          <div className={Styles.dates}>
            <div className={Styles.date}>
              <span className={Styles.date__span}>10.01.2022</span>
            </div>
            <div className={Styles.date}>
              <span className={Styles.date__span}>25.02.2022</span>
              <span className={Styles.date__lastSpan}>{t('roundsRoadmap_endSelling')}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.info}>
        <p className={Styles.description}>{t('roundsRoadmap_description1')}</p>
        <p className={Styles.description}>{t('roundsRoadmap_description2')}</p>
      </div>
    </div>
  )
}
