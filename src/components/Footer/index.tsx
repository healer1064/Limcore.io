import React from 'react'
import Styles from './styles.module.scss'

import logo from '../../assets/icons/LimLogo.png'
// import logo from '../../assets/icons/FooterLogo.svg'
import RU from '../../assets/images/flag-ru.png'
import arrow from '../../assets/icons/grey-arrow-down.png'

export const Footer: React.FC = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.wrapper}>
        <div className={Styles.footer__container}>
          <img src={logo} alt='Logo' className={Styles.logo} />
          <div className={Styles.footer__languageGroup}>
            <img className={Styles.footer__languageIcon} src={RU} alt='RU' />
            <p className={Styles.footer__language}>RU</p>
            <img className={Styles.footer__languageArrow} src={arrow} alt='Arrow-button' />
          </div>
          <ul className={`${Styles.footer__etc} ${Styles.footer__list}`}>
            <h3 className={`${Styles.footer_listTitle} ${Styles.footer__listTitle_etcTitle}`}>Прочее</h3>
            <div className={Styles.footer__listItemContainer_etc}>
              <li className={Styles.footer__listItem}>
                <a href='#' target='blank' rel='noopener noreferrer' className={Styles.footer__link}>
                  Whitepaper
                </a>
              </li>
              <li className={Styles.footer__listItem}>
                <a href='#' target='blank' rel='noopener noreferrer' className={Styles.footer__link}>
                  Рекламный буклет
                </a>
              </li>
            </div>
          </ul>
          <ul className={`${Styles.footer__information} ${Styles.footer__list}`}>
            <h3 className={Styles.footer_listTitle}>Раскрытие информации</h3>
            <li className={Styles.footer__listItem}>
              <a href='#' target='blank' rel='noopener noreferrer' className={Styles.footer__link}>
                Учредительные документы РФ
              </a>
            </li>
            <li className={Styles.footer__listItem}>
              <a href='#' target='blank' rel='noopener noreferrer' className={Styles.footer__link}>
                Учредительные документы Swiss
              </a>
            </li>
            <li className={Styles.footer__listItem}>
              <a href='#' target='blank' rel='noopener noreferrer' className={Styles.footer__link}>
                Страхование оборудования
              </a>
            </li>
            <li className={Styles.footer__listItem}>
              <a href='#' target='blank' rel='noopener noreferrer' className={Styles.footer__link}>
                Страхование здания и прочего имущества
              </a>
            </li>
          </ul>
          <ul className={`${Styles.footer__users} ${Styles.footer__list}`}>
            <h3 className={Styles.footer_listTitle}>Взаимодействие с пользователями</h3>
            <li className={Styles.footer__listItem}>
              <a href='#' target='blank' rel='noopener noreferrer' className={Styles.footer__link}>
                Пользовательское соглашение об обработке персональных данных
              </a>
            </li>
            <li className={Styles.footer__listItem}>
              <a href='#' target='blank' rel='noopener noreferrer' className={Styles.footer__link}>
                Договор оферта о покупке токена LIMC
              </a>
            </li>
          </ul>
          <div className={Styles.footer__line} />
          <ul className={`${Styles.footer__address} ${Styles.footer__list}`}>
            <h3 className={Styles.footer_listTitle}>Россия</h3>
            <li className={`${Styles.footer__listItem_gray} ${Styles.footer__listItem_address}`}>
              ООО «Лимкор Дата Центр»
            </li>
            <li className={`${Styles.footer__listItem_gray} ${Styles.footer__listItem_address}`}>
              КПП: 772901001 / ИНН: 9729264079
            </li>
            <li className={`${Styles.footer__listItem_gray} ${Styles.footer__listItem_address}`}>
              Юридический адрес компании: г. Можайск, улица Мира, дом 98
            </li>
          </ul>
          <ul className={`${Styles.footer__issuer} ${Styles.footer__list}`}>
            <div className={Styles.footer__listItemContainer}>
              <h3 className={Styles.footer_listTitle_noWrap}>UAE эмитент LIMC Round 1</h3>
              <li className={Styles.footer__listItem_gray}>В процессе регистрации</li>
            </div>
            <div className={Styles.footer__listItemContainer}>
              <h3 className={Styles.footer_listTitle}>Швейцария</h3>
              <li className={Styles.footer__listItem_gray}>В процессе регистрации</li>
            </div>
          </ul>
          <p className={Styles.footer__email}>info@limcore.io</p>
          <ul className={Styles.footer__social}>
            <li className={`${Styles.footer__socialIcon_twitter} ${Styles.footer__socialIcon}`}>
              <a href='#' target='blank' rel='noopener noreferrer' className={Styles.footer__link} />
            </li>
            <li className={`${Styles.footer__socialIcon_linkedIn} ${Styles.footer__socialIcon}`}>
              <a href='#' target='blank' rel='noopener noreferrer' className={Styles.footer__link} />
            </li>
            <li className={`${Styles.footer__socialIcon_vk} ${Styles.footer__socialIcon}`}>
              <a href='#' target='blank' rel='noopener noreferrer' className={Styles.footer__link} />
            </li>
            <li className={`${Styles.footer__socialIcon_insta} ${Styles.footer__socialIcon}`}>
              <a href='#' target='blank' rel='noopener noreferrer' className={Styles.footer__link} />
            </li>
            <li className={`${Styles.footer__socialIcon_telegram} ${Styles.footer__socialIcon}`}>
              <a href='#' target='blank' rel='noopener noreferrer' className={Styles.footer__link} />
            </li>
            <li className={`${Styles.footer__socialIcon_facebook} ${Styles.footer__socialIcon}`}>
              <a href='#' target='blank' rel='noopener noreferrer' className={Styles.footer__link} />
            </li>
          </ul>
          <p className={Styles.footer__copyright}>
            &copy;
            {` ${new Date().getFullYear()} LimCore`}
          </p>
        </div>
      </div>
    </footer>
  )
}
