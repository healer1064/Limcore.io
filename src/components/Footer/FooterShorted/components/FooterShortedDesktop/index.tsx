import React from 'react'
import Styles from './styles.module.scss'
import { LanguagePopup } from '@components/LanguagePopup'
import { Telegram } from '@icons/Telegram'
import { Youtube } from '@icons/Youtube'
import { Twitter } from '@icons/Twitter'
import { Discord } from '@icons/Discord'
import { FooterLogo } from '@components/Footer/components/FooterLogo'

export const FooterShortedDesktop: React.FC = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.wrapper}>
        <div className={Styles.left}>
          <FooterLogo className={Styles.logo} />
          <div className={Styles.left__inner}>
            <p className={Styles.left__subtitle}>© 2022 LimCore</p>
            <LanguagePopup position={{ top: '-120px', left: '70px', background: '#192A2C' }} footerStyles />
          </div>
        </div>
        <div className={Styles.right}>
          <ul className={Styles.right__list}>
            <a className={Styles.right__icon} href='https://t.me/limc_russ' target='blank' rel='noopener noreferrer'>
              <Telegram />
            </a>
            <a
              className={Styles.right__icon}
              href='https://youtube.com/channel/UCjPwzyVtL5WQtRoqiR0ZdGg'
              target='blank'
              rel='noopener noreferrer'
            >
              <Youtube />
            </a>
            <a className={Styles.right__icon} href='https://discord.com' target='blank' rel='noopener noreferrer'>
              <Discord />
            </a>
            <a className={Styles.right__icon} href='https://twitter.com' target='blank' rel='noopener noreferrer'>
              <Twitter />
            </a>
          </ul>

          <a className={Styles.right__email} href='mailto:info@limcore.io'>
            info@limcore.io
          </a>
        </div>
      </div>
    </footer>
  )
}
