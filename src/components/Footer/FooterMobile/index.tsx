import React from 'react'
import Styles from './styles.module.scss'

import { useTranslation } from 'react-i18next'
import { FooterLogo } from '@components/Footer/components/FooterLogo'
import { Telegram } from '@icons/Telegram'
import { Youtube } from '@icons/Youtube'
import { Discord } from '@icons/Discord'
import { Twitter } from '@icons/Twitter'
import { FooterListTitle } from '@components/Footer/components/FooterListTitle'
import { FooterListItem } from '@components/Footer/components/FooterListItem'
import { CoinMarketCap } from '@icons/CoinMarkerCap'
import { BscScan } from '@icons/BscScan'
import { CoinGecko } from '@icons/CoinGecko'
import { HitBTC } from '@icons/HitBTC'
import { LanguagePopup } from '@components/LanguagePopup'
import { FooterCopyright } from '@components/Footer/components/FooterCopyright'

export const FooterMobile: React.FC = () => {
  const [t] = useTranslation()

  return (
    <footer className={Styles.footer}>
      <div className={Styles.top__wrapper}>
        <FooterLogo className={Styles.footer__logo} />
        <ul className={Styles.footer__social}>
          <Telegram className={Styles.footer__socialIcon} />
          <Youtube className={Styles.footer__socialIcon} />
          <Discord className={Styles.footer__socialIcon} />
          <Twitter className={Styles.footer__socialIcon} />
        </ul>
        <ul className={`${Styles.footer__information} ${Styles.footer__list}`}>
          <FooterListTitle className={Styles.footer__listTitle}>{t('footer_infoDeclosure')}</FooterListTitle>
          <FooterListItem className={Styles.footer__listItem} link='/'>
            {t('Whitepaper')}
          </FooterListItem>
          <FooterListItem className={Styles.footer__listItem} link='/'>
            {t('Команда')}
          </FooterListItem>
          <FooterListItem className={Styles.footer__listItem} link='/'>
            {t('FAQ')}
          </FooterListItem>
          <FooterListItem className={Styles.footer__listItem} link='/'>
            {t('Вакансии')}
          </FooterListItem>
          <FooterListItem className={Styles.footer__listItem} link='/'>
            {t('Для СМИ')}
          </FooterListItem>
        </ul>
        <ul className={`${Styles.footer__users} ${Styles.footer__list}`}>
          <FooterListTitle className={Styles.footer__listTitle}>{t('footer_coop')}</FooterListTitle>
          <FooterListItem className={Styles.footer__listItem} link='/'>
            {t('Поставщикам оборудования')}
          </FooterListItem>
          <FooterListItem className={Styles.footer__listItem} link='/'>
            {t('Дата-Центрам')}
          </FooterListItem>
          <p className={Styles.footer__email}>
            <a href='mailto:info@limcore.io'>info@limcore.io</a>
          </p>
        </ul>
      </div>
      <div className={Styles.footer__line} />
      <div className={Styles.bottom__wrapper}>
        <div className={Styles.icons__group}>
          <CoinMarketCap width={147} height={30} className={Styles.icons__group__item} />
          <BscScan width={103} height={30} className={Styles.icons__group__item} />
          <CoinGecko width={108} height={30} className={Styles.icons__group__item} />
        </div>
        <div className={Styles.hitBTC__group}>
          <HitBTC width={89} height={36} className={Styles.hitBTC__group__icon} />
          <p className={Styles.hitBTC__group__text}>...скоро и на других биржах!</p>
        </div>
        <div className={Styles.copyAndLang__group}>
          <FooterCopyright className={Styles.footer__copyright} />
          <LanguagePopup position={{ top: '-115px', left: '-160px', background: '#192A2C' }} footerStyles />
        </div>
      </div>
    </footer>
  )
}
