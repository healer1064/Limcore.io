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

import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import img1 from '../../../../assets/images/g1.png'
import img2 from '../../../../assets/images/g2.png'
import img3 from '../../../../assets/images/g3.png'
import img4 from '../../../../assets/images/g4.png'

export interface DialogTitleProps {
  id: string
  children?: React.ReactNode
  onClose: () => void
}

interface IBurgerMenu {
  burgerOpened: boolean
  closeBurger: () => void
}

interface ILink {
  id: number
  value: string
  link: string
}

interface ISocialMedia {
  id: number
  icon: React.ReactNode
  link: string
}

export const BurgerMenu = ({ burgerOpened, closeBurger }: IBurgerMenu) => {
  const infoLinks = [
    { id: 1, value: 'Whitepaper', link: 'whitepaper' },
    { id: 2, value: 'Команда', link: 'team' },
    { id: 3, value: 'FAQ', link: 'faq' },
    { id: 4, value: 'Вакансии', link: 'posts' },
    { id: 5, value: 'Для СМИ', link: 'smm' },
  ]

  const partnersLinks = [
    { id: 1, value: 'Поставщикам оборудования', link: 'equipers' },
    { id: 2, value: 'Дата-Центрам', link: 'centres' },
  ]

  const socialMedia = [
    { id: 1, icon: <Telegram />, link: 'https://t.me/limc_russ' },
    { id: 2, icon: <Youtube />, link: 'https://youtube.com/channel/UCjPwzyVtL5WQtRoqiR0ZdGg' },
    { id: 3, icon: <Discord />, link: 'https://t.me/limc_russ' },
    { id: 4, icon: <Twitter />, link: 'https://t.me/limc_russ' },
  ]

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Modal active={burgerOpened} setActive={closeBurger} isMobile>
      <div className={Styles.container}>
        <div className={Styles.header}>
          <div className={Styles.header__inner}>
            <img className={Styles.logo} src={logoIcon} alt='Лого' />
            <button type='reset' className={Styles.close__btn} onClick={closeBurger}>
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className={Styles.inner}>
          <div className={Styles.body}>
            <div className={Styles.connect}>
              <ButtonSecond className={Styles.connect__btn} onClick={handleClickOpen}>
                Подключить кошелек
              </ButtonSecond>
            </div>

            <ul className={Styles.list}>
              <li className={Styles.item}>
                <h4 className={Styles.list__title}>Информация</h4>
              </li>

              {infoLinks.map((link: ILink) => (
                <li className={Styles.item} key={link.id}>
                  <Link className={Styles.item__link} to={link.link} spy smooth onClick={closeBurger}>
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
                  <Link className={Styles.item__link} to={link.link} onClick={closeBurger}>
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
                <li key={item.id} className={Styles.social__item}>
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
        <div>
          <Dialog fullScreen open={open} onClose={handleClose}>
            <div className={Styles.redik}>
              <div>
                <div className={Styles.diolognav}>
                  <p className={Styles.dilogText}>ПОДКЛЮЧИТЬ КОШЕЛЕК</p>
                  <IconButton
                    onClick={handleClose}
                    sx={{
                      position: 'absolute',
                      right: 8,
                      top: 8,
                      marginTop: 3,
                      marginRight: 1,
                      color: (theme) => theme.palette.grey[500],
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </div>
                <div className={Styles.diologContainer}>
                  <div className={Styles.diologItem}>
                    <div className={Styles.diologItemCont}>
                      <div className={Styles.itemitem}>
                        <img src={img2} />
                        <p>WalletConnect</p>
                      </div>
                      <div className={Styles.itemitem}>
                        <img src={img3} />
                        <p>WalletConnect</p>
                      </div>
                    </div>
                    <div className={Styles.diologItemCont}>
                      <div className={Styles.itemitem}>
                        <img src={img1} />
                        <p>Metamask</p>
                      </div>
                      <div className={Styles.itemitem}>
                        <img src={img4} className={Styles.itemitemimg} />
                        <p>Другие</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={Styles.center}>
                <button autoFocus className={Styles.button}>
                  Подключить
                </button>
              </div>
            </div>
          </Dialog>
        </div>
      </div>
    </Modal>
  )
}
