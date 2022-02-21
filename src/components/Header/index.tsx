import React, { useEffect, useState } from 'react'
import Styles from './style.module.scss'
import { Link, Link as LinkDom, useHistory } from 'react-router-dom'

import logoIcon from '../../assets/images/headerLogo.png'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import ModalAuth from '../../pages/landing/components/ModalAuth'
import { setIsBuyLimcClick } from '../../pages/auth/redux/authSlice'

import { useTranslation } from 'react-i18next'
import { LanguagePopup } from '../LanguagePopup/index'
import { Dropdown } from './components/Dropdown'

import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

import img1 from '../../assets/images/g1.png'
import img2 from '../../assets/images/g2.png'
import img3 from '../../assets/images/g3.png'
import img4 from '../../assets/images/g4.png'

const BootstrapDialog = styled(Dialog)({
  '& .MuiPaper-root': {
    backgroundColor: '#192A2C',
    borderRadius: 20,
  },
})
export interface DialogTitleProps {
  id: string
  children?: React.ReactNode
  onClose: () => void
}
const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          // aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

export const Header: React.FC = () => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const history = useHistory()
  const dispatch = useAppDispatch()
  const [t] = useTranslation()

  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false)
  const isAuth = useAppSelector((state) => state.auth.isAuth)
  const isBuyLimcClick = useAppSelector((state) => state.auth.isBuyLimcClick)

  const infoLinks = [
    { id: 1, value: 'Whitepaper', link: 'limcore' },
    { id: 2, value: 'Команда', link: 'roadmap' },
    { id: 3, value: 'FAQ', link: 'team' },
    { id: 5, value: 'Вакансии', link: 'questions' },
    { id: 6, value: 'Для СМИ', link: 'questions' },
  ]

  const partnersLinks = [
    { id: 2, value: 'Команда', link: 'roadmap' },
    { id: 1, value: 'Whitepaper', link: 'limcore' },
    { id: 6, value: 'Для СМИ', link: 'questions' },
  ]

  useEffect(() => {
    setIsLoginModalVisible(isBuyLimcClick)
  }, [isBuyLimcClick])

  const handleLoginModalOpen = () => {
    setIsLoginModalVisible(true)
  }

  const handleLoginModalClose = () => {
    setIsLoginModalVisible(false)
    if (isBuyLimcClick) {
      const close = () => dispatch(setIsBuyLimcClick(false))
      setTimeout(close, 200)
    }
  }

  useEffect(() => {
    if (isAuth) {
      setIsLoginModalVisible(false)
    }
  }, [isAuth])

  function handleClick(e) {
    if (history.location.pathname === '/') {
      const link = e.target.getAttribute('href').slice(1)
      const destination = document.getElementById(`${link}`)
      destination.scrollIntoView({ behavior: 'smooth' })
    } else {
      history.push('./')
    }
  }

  return (
    <header className={Styles.header}>
      <nav className={Styles.wrapper}>
        <a href='/' className={Styles.logoLink} target='blank' rel='noopener noreferrer'>
          <img src={logoIcon} alt='Лого' className={Styles.logoImg} />
        </a>
        <ul className={Styles.list}>
          <li className={Styles.item}>
            <Dropdown title='Информация'>
              {infoLinks.map((item) => {
                return (
                  <a className={Styles.link} key={item.id} href={`#${item.link}`} onClick={(e) => handleClick(e)}>
                    {item.value}
                  </a>
                )
              })}
            </Dropdown>
          </li>
          <li className={Styles.item}>
            <Dropdown title='Партнерам'>
              {partnersLinks.map((item) => {
                return (
                  <a className={Styles.link} key={item.id} href={`#${item.link}`} onClick={(e) => handleClick(e)}>
                    {item.value}
                  </a>
                )
              })}
            </Dropdown>
          </li>
          <li className={Styles.item}>
            <Link to='/data-center' href='#' className={Styles.item__link}>
              Статистика
            </Link>
          </li>
        </ul>
        <div className={Styles.container}>
          <LanguagePopup position={{ top: '37px' }} />
          {isAuth ? (
            <button className={Styles.profileBtn} type='button' onClick={handleClickOpen}>
              <LinkDom to='/' className={Styles.profileBtn_link}>
                {/* {t('profile')} */}
                Подключить кошелек
              </LinkDom>
            </button>
          ) : (
            <button className={Styles.loginBtn} onClick={handleLoginModalOpen} type='button'>
              {t('login')}
            </button>
          )}
          <ModalAuth isVisible={isLoginModalVisible} setModalClose={handleLoginModalClose} />
        </div>
      </nav>
      <div>
        <BootstrapDialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={open}>
          <BootstrapDialogTitle id='customized-dialog-title' onClose={handleClose}>
            <p className={Styles.dilogText}>ПОДКЛЮЧИТЬ КОШЕЛЕК</p>
          </BootstrapDialogTitle>
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
          <div className={Styles.center}>
            <button autoFocus className={Styles.button}>
              Подключить
            </button>
          </div>
        </BootstrapDialog>
      </div>
    </header>
  )
}
