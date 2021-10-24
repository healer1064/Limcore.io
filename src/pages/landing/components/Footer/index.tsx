import React from 'react'
import Styles from './styles.module.scss'

import logo from '../../../../assets/icons/Limcore-logo.png'
import RU from '../../../../assets/images/flag-ru.png'
import arrow from '../../../../assets/icons/grey-arrow-down.png'

export const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footer__container}>
        <img src={logo} alt='Logo' className={Styles.logo} />
        <div className={Styles.footer__languageGroup}>
          <img className={Styles.footer__languageIcon} src={RU} alt='RU' />
          <p className={Styles.footer__language}>RU</p>
          <img className={Styles.footer__languageIcon} src={arrow} alt='Arrow-button' />
        </div>
        <ul className={`${Styles.footer__etc} ${Styles.footer__list}`}>
          <li className={Styles.footer__listItem}>Whitepaper</li>
          <li className={Styles.footer__listItem}>Рекламный буклет</li>
        </ul>
        <ul className={`${Styles.footer__information} ${Styles.footer__list}`}>
          <h3 className={Styles.footer_listTitle}>Раскрытие информации</h3>
          <li className={Styles.footer__listItem}>Учредительные документы РФ</li>
          <li className={Styles.footer__listItem}>Учредительные документы Swiss</li>
          <li className={Styles.footer__listItem}>Страхование оборудования</li>
          <li className={Styles.footer__listItem}>Страхование здания и прочего имущества</li>
        </ul>
        <ul className={`${Styles.footer__users} ${Styles.footer__list}`}>
          <h3 className={Styles.footer_listTitle}>Взаимодействие с пользователями</h3>
          <li className={Styles.footer__listItem}>Пользовательское соглашение об обработке персональных данных</li>
          <li className={Styles.footer__listItem}>Договор оферта о покупке токена LIMC</li>
        </ul>
        <div className={Styles.footer__line} />
        <ul className={`${Styles.footer__address} ${Styles.footer__list}`}>
          <h3 className={Styles.footer_listTitle}>Россия</h3>
          <li className={Styles.footer__listItem_gray}>ООО «Лимкор Дата Центр»</li>
          <li className={Styles.footer__listItem_gray}>КПП: 772901001 / ИНН: 9729264079</li>
          <li className={Styles.footer__listItem_gray}>Юридический адрес компании: г. Можайск, улица Мира, дом 98</li>
        </ul>
        <ul className={`${Styles.footer__issuer} ${Styles.footer__list}`}>
          <div className={Styles.footer__listItemContainer}>
            <h3 className={Styles.footer_listTitle}>UAE эмитент LIMC Round 1</h3>
            <li className={Styles.footer__listItem_gray}>В процессе регистрации</li>
          </div>
          <div className={Styles.footer__listItemContainer}>
            <h3 className={Styles.footer_listTitle}>Швейцария</h3>
            <li className={Styles.footer__listItem_gray}>В процессе регистрации</li>
          </div>
        </ul>
        <p className={Styles.footer__email}>info@limcore.io</p>
        <ul className={Styles.footer__social}>
          <li className={Styles.footer__socialIcon_twitter}>
            <a href='#' target='blank' rel='noopener noreferrer' />
          </li>
          <li className={Styles.footer__socialIcon_linkedIn}>
            <a href='#' target='blank' rel='noopener noreferrer' />
          </li>
          <li className={Styles.footer__socialIcon_vk}>
            <a href='#' target='blank' rel='noopener noreferrer' />
          </li>
          <li className={Styles.footer__socialIcon_insta}>
            <a href='#' target='blank' rel='noopener noreferrer' />
          </li>
          <li className={Styles.footer__socialIcon_telegram}>
            <a href='#' target='blank' rel='noopener noreferrer' />
          </li>
          <li className={Styles.footer__socialIcon_facebook}>
            <a href='#' target='blank' rel='noopener noreferrer' />
          </li>
        </ul>
        <p className={Styles.footer__copyright}>
          &copy;
          {` ${new Date().getFullYear()} LimCore`}
        </p>
      </div>
    </footer>
  )
}
