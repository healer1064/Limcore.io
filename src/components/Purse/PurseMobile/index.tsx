import React, { FC, useEffect } from 'react'
import styles from './styles.module.scss'

import { Balance } from './components/Balance'
import { Menu } from './components/Menu'
import { Details } from './components/Details'
import { Statistics } from './components/Statistics'

import { ButtonBig } from '../../../ui-kit/ButtonBig'

import { FooterMobile } from '@components/Footer/FooterMobile'
import { RoadMap } from '@components/Purse/PurseMobile/components/RoadMap'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { changeViewContent } from '../../../pages/cabinet/redux/cabinetSlice'

export const PurseMobile: FC = () => {
  const [t] = useTranslation()
  const dispatch = useDispatch()
  const openLimc = () => dispatch(changeViewContent('LIMC'))

  // на iPhone Pro Max ЛК появляется с прокруткой ~50px от верха страницы
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles.purse}>
      <Balance />
      <Menu />
      <div className={styles.purse__content}>
        <RoadMap />
        <ButtonBig className={styles.buy} onClick={openLimc}>
          {t('buyLimc')}
        </ButtonBig>
        <Statistics />
        <Details />
        <FooterMobile />
      </div>
    </div>
  )
}
