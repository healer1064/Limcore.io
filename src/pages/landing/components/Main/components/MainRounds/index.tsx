import React, { useState } from 'react'
import Styles from './styles.module.scss'

import PopupStyles from '../PopupMainPage/styles.module.scss'

import limcoreIcon from '@icons/limcore.svg'
import { InfoIcon } from '@icons/InfoIcon'
import { useAppSelector } from '@app/redux/hooks'
import { useTranslation } from 'react-i18next'
import { BottomModal } from '@components/Modal/BottomModal'
import useWindowSize from '@helpers/useWindowSizeHook'
import { PopupMainPage } from '../PopupMainPage'

export const MainRounds: React.FC = () => {
  const [t] = useTranslation()
  const { width } = useWindowSize()
  const mobile = width < 769

  const [popupOpen, setPopupOpen] = useState(false)
  const limcCount = useAppSelector((state) => state.auth.walletConnectSoldLimcs)
  const limcLimit = useAppSelector((state) => state.wallet.limcLimit)

  const closePopup = () => {
    setPopupOpen(false)
  }
  const openPopup = () => {
    setPopupOpen(true)
  }

  return (
    <div className={Styles.rounds}>
      <div className={Styles.block}>
        <h2 className={`${Styles.wrap} ${Styles.name}`}>{t('firstRound_round1')}</h2>
        <ul className={Styles.list}>
          <li className={Styles.item}>
            <p className={Styles.designation}>{t('firstRound_limit')}</p>
            <p className={Styles.value}>{limcLimit} LIMC</p>
            <img className={Styles.icon} src={limcoreIcon} alt='Иконка' />
          </li>
          <li className={Styles.item}>
            <p className={Styles.designation}>{t('firstRound_limcPrice')}</p>
            <p className={Styles.value}>$95</p>
          </li>
          <li className={Styles.item}>
            <p className={Styles.designation}>{t('firstRound_terms')}</p>
            <p className={Styles.value}>{t('firstRound_firstRoundTerms')}</p>
            <InfoIcon className={Styles.icon} onClick={openPopup} />
          </li>
        </ul>
      </div>
      {mobile ? (
        <BottomModal active={popupOpen} setActive={closePopup}>
          <p className={PopupStyles.text}>{t('purse_mainingStart')}</p>
        </BottomModal>
      ) : (
        <PopupMainPage closePopup={closePopup} popupOpen={popupOpen} className={PopupStyles.popup_round}>
          <p className={PopupStyles.text}>{t('purse_mainingStart')}</p>
        </PopupMainPage>
      )}
      <div className={Styles.progress}>
        <span className={Styles.bar} style={{ width: `calc(${limcCount} / 80000 * 100%)` }} />
        <p className={Styles.count}>{limcCount} / 80000</p>
      </div>
      <button type='button' className={Styles.wrapp}>
        <a href='https://round1.limcore.io' className={Styles.buy} target='blank' rel='noopener noreferrer'>
          {t('buyLimc')}
        </a>
        <span>{t('lockUp')}</span>
      </button>
      <div className={Styles.roadContainer}>
        <div className={Styles.emptyContainers}>
          <div className={Styles.emptyContainer_first} />
          <div className={Styles.emptyContainer} />
        </div>
        <div className={Styles.road}>
          <div className={Styles.cover}>
            <div className={Styles.round}>
              <time className={Styles.date__mobile}>10.01.2022</time>
              <h3 className={Styles.subtitle}>{t('roundsRoadmap_round2')}</h3>
              <div className={Styles.row}>
                <p>{t('roundsRoadmap_limcMin')}</p>
                <p>120,000</p>
              </div>
            </div>
            <div className={Styles.round}>
              <time className={Styles.date__mobile}>25.02.2022</time>
              <h3 className={Styles.subtitle}>{t('roundsRoadmap_round3')}</h3>
              <div className={Styles.row}>
                <p>{t('roundsRoadmap_priceLater')}</p>
              </div>
            </div>
            <div className={Styles.round}>
              <h3 className={Styles.subtitle}>{t('roundsRoadmap_round4')}</h3>
              <div className={Styles.row}>
                <p>{t('roundsRoadmap_priceLater')}</p>
              </div>
            </div>
            <div className={Styles.round}>
              <h3 className={Styles.subtitle}>{t('roundsRoadmap_round5')}</h3>
              <div className={Styles.row}>
                <p>{t('roundsRoadmap_priceLater')}</p>
              </div>
            </div>
            <time className={Styles.date__mobile}>{t('roundsRoadmap_endSelling')}</time>
          </div>
        </div>
        <div className={Styles.shell}>
          <div className={Styles.lines}>
            <div className={Styles.line} />
            <div className={Styles.line} />
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
