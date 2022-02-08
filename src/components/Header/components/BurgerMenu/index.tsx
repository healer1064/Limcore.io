import React from 'react'
import { Link } from 'react-scroll'
import Styles from './styles.module.scss'

import { Telegram } from '@icons/Telegram'
import { Youtube } from '@icons/Youtube'
import { Discord } from '@icons/Discord'
import { Twitter } from '@icons/Twitter'
import { LanguagePopup } from '@components/LanguagePopup'
import { Modal } from '@components/Modal'
import { CloseIcon } from '@icons/CloseIcon'
import logoIcon from '@images/headerLogo.png'
import { ButtonSecond } from '../../../../ui-kit/ButtonSecond'

interface IBurgerMenu {
  burgerOpened: boolean
  closeBurger: () => void
}

interface ILink {
  id: number
  value: string
  link: string
  spy: boolean
  smooth: boolean
}

interface ISocialMedia {
  id: number
  icon: React.ReactNode
  link: string
}

export const BurgerMenu = ({ burgerOpened, closeBurger }: IBurgerMenu) => {
  const infoLinks = [
    { id: 1, value: 'Whitepaper', link: 'whitepaper', spy: true, smooth: true },
    { id: 2, value: 'Команда', link: 'team', spy: true, smooth: true },
    { id: 3, value: 'FAQ', link: 'faq', spy: true, smooth: true },
    { id: 5, value: 'Вакансии', link: 'posts', spy: true, smooth: true },
    { id: 5, value: 'Для СМИ', link: 'smm', spy: true, smooth: true },
  ]

  const partnersLinks = [
    { id: 1, value: 'Поставщикам оборудования', link: 'equipers', spy: true, smooth: true },
    { id: 2, value: 'Дата-Центрам', link: 'centres', spy: true, smooth: true },
  ]

  const socialMedia = [
    { id: 1, icon: <Telegram />, link: 'https://t.me/limc_russ' },
    { id: 1, icon: <Youtube />, link: 'https://youtube.com/channel/UCjPwzyVtL5WQtRoqiR0ZdGg' },
    { id: 1, icon: <Discord />, link: 'https://t.me/limc_russ' },
    { id: 1, icon: <Twitter />, link: 'https://t.me/limc_russ' },
  ]

  return (
    <Modal active={burgerOpened} setActive={closeBurger} isMobile>
      <div className={Styles.container}>
        <div className={Styles.header}>
          <div className={Styles.header__inner}>
            <img className={Styles.logo} src={logoIcon} alt='Лого' />
            <button type='reset' onClick={closeBurger}>
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className={Styles.inner}>
          <div className={Styles.body}>
            <div className={Styles.connect}>
              <ButtonSecond>Подключить кошелек</ButtonSecond>
            </div>

            <ul className={Styles.list}>
              <li className={Styles.item}>
                <h4 className={Styles.list__title}>Информация</h4>
              </li>

              {infoLinks.map((link: ILink) => (
                <li className={Styles.item} key={link.id}>
                  <Link
                    className={Styles.item__link}
                    to={link.link}
                    spy={link.spy}
                    smooth={link.smooth}
                    onClick={closeBurger}
                  >
                    {link.value}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className={Styles.list}>
              <li className={Styles.item}>
                <h4 className={Styles.list__title}>Партнерам</h4>
              </li>

              {partnersLinks.map((link: ILink) => (
                <li className={Styles.item} key={link.id}>
                  <Link
                    className={Styles.item__link}
                    to={link.link}
                    spy={link.spy}
                    smooth={link.smooth}
                    onClick={closeBurger}
                  >
                    {link.value}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className={Styles.list__title}>Статистика</h4>
          </div>

          <div className={Styles.footer}>
            <ul className={Styles.social}>
              {socialMedia.map((item: ISocialMedia) => (
                <li key={item.link} className={Styles.social__item}>
                  <a href={item.link} target='blank' rel='noopener noreferrer'>
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>

            <div className={Styles.utils}>
              <a href='mailto:info@limcore.io' target='blank' rel='noopener noreferrer' className={Styles.email}>
                info@limcore.io
              </a>
              <LanguagePopup position={{ top: '-180px', left: '-100px' }} />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}
