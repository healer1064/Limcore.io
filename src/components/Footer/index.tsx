import React from 'react'
import Styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import { LanguagePopup } from '@components/LanguagePopup'
import { Telegram } from '@icons/Telegram'
import { Youtube } from '@icons/Youtube'
import { Twitter } from '@icons/Twitter'
import { Discord } from '@icons/Discord'
import { CoinMarketCap } from '@icons/CoinMarkerCap'
import { BscScan } from '@icons/BscScan'
import { CoinGecko } from '@icons/CoinGecko'
import { HitBTC } from '@icons/HitBTC'
import { FooterListItem } from '@components/Footer/components/FooterListItem'
import { FooterLogo } from '@components/Footer/components/FooterLogo'
import { FooterListTitle } from '@components/Footer/components/FooterListTitle'
import useWindowSize from '@helpers/useWindowSizeHook'
import { FooterCopyright } from '@components/Footer/components/FooterCopyright'

export const Footer: React.FC = () => {
  const [t] = useTranslation()
  const { width } = useWindowSize()
  const mobile = width < 1162

  const itemClassName = mobile ? Styles.icons__group__item__marg0 : Styles.icons__group__item
  const groupClassName = mobile ? Styles.icons__group__start : Styles.icons__group

  return (
    <footer className={Styles.footer}>
      <nav className={Styles.footer__container}>
        <div className={Styles.top__wrapper}>
          <FooterLogo className={Styles.footer__logo} />
          <div className={Styles.social__group}>
            <FooterListTitle className={Styles.footer_listTitle}>{t('Подписывайтесь')}</FooterListTitle>
            <ul className={Styles.footer__social}>
              <a href='https://t.me/limc_russ' target='blank' rel='noopener noreferrer'>
                <Telegram className={Styles.footer__socialIcon} />
              </a>
              <a href='https://youtube.com/channel/UCjPwzyVtL5WQtRoqiR0ZdGg' target='blank' rel='noopener noreferrer'>
                <Youtube className={Styles.footer__socialIcon} />
              </a>
              <a href='https://discord.com' target='blank' rel='noopener noreferrer'>
                <Discord className={Styles.footer__socialIcon} />
              </a>
              <a href='https://twitter.com/Limcoremining' target='blank' rel='noopener noreferrer'>
                <Twitter className={Styles.footer__socialIcon} />
              </a>
            </ul>
          </div>
          <ul className={`${Styles.footer__information} ${Styles.footer__list}`}>
            <FooterListTitle className={Styles.footer_listTitle}>{t('footer_infoDeclosure')}</FooterListTitle>
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
            <FooterListTitle className={Styles.footer_listTitle}>{t('footer_coop')}</FooterListTitle>
            <FooterListItem className={Styles.footer__listItem} link='/'>
              {t('Поставщикам оборудования')}
            </FooterListItem>
            <FooterListItem className={Styles.footer__listItem} link='/'>
              {t('Дата-Центрам')}
            </FooterListItem>
          </ul>
          <p className={Styles.footer__email}>
            <a href='mailto:info@limcore.io'>info@limcore.io</a>
          </p>
        </div>
        <div className={Styles.footer__line} />
        <div className={Styles.bottom__wrapper}>
          <div className={Styles.copyAndLang__group}>
            <FooterCopyright className={Styles.footer__copyright} />
            <LanguagePopup position={{ top: '-120px', left: '70px', background: '#192A2C' }} footerStyles />
          </div>
          <div className={groupClassName}>
            <CoinMarketCap width={170} height={37} className={itemClassName} />
            <CoinGecko width={120} height={33} className={itemClassName} />
            <BscScan width={120} height={30} className={itemClassName} />
          </div>
          <div className={Styles.hitBTC__group}>
            <HitBTC width={105} height={43} className={Styles.icons__group__item} />
            <p className={Styles.hitBTC__group__text}>...скоро и на других биржах!</p>
          </div>
        </div>
      </nav>
    </footer>
  )
}
