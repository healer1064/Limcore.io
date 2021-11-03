import React from 'react'
import Styles from './styles.module.scss'

// import logo from '../../assets/icons/LimLogo.png'
// import logo from '../../assets/icons/FooterLogo.svg'
import RU from '../../assets/images/flag-ru.png'
import arrow from '../../assets/icons/grey-arrow-down.png'
import twitter from '../../assets/icons/twitter-icon.png'
import linkedIn from '../../assets/icons/linkedIn-icon.png'
import vk from '../../assets/icons/vk-icon.png'
import insta from '../../assets/icons/insta-icon.png'
import tg from '../../assets/icons/telegram-icon.png'
import facebook from '../../assets/icons/facebook-icon.png'
import youTube from '../../assets/icons/SF Symbol/play.fill.svg'
import { FooterLogo } from '@components/Footer/components/FooterLogo'

export const Footer: React.FC = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.wrapper}>
        <div className={Styles.footer__container}>
          {/* <img src={logo} alt='Logo' className={Styles.logo} /> */}
          <FooterLogo />
          <div className={Styles.footer__languageGroup}>
            <img className={Styles.footer__languageIcon} src={RU} alt='RU' />
            <p className={Styles.footer__language}>RU</p>
            {/* <img className={Styles.footer__languageArrow} src={arrow} alt='Arrow-button' /> */}
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
                <a
                  href='../../assets/docs/buklet.pdf'
                  download
                  target='blank'
                  rel='noopener noreferrer'
                  className={Styles.footer__link}
                >
                  Рекламный буклет
                </a>
              </li>
            </div>
          </ul>
          <ul className={`${Styles.footer__information} ${Styles.footer__list}`}>
            <h3 className={Styles.footer_listTitle}>Раскрытие информации</h3>
            <li className={Styles.footer__listItem}>
              <a
                href='../../assets/docs/rf.zip'
                download
                target='blank'
                rel='noopener noreferrer'
                className={Styles.footer__link}
              >
                Учредительные документы РФ
              </a>
            </li>
            <li className={Styles.footer__listItem}>
              <a
                target='blank'
                rel='noopener noreferrer'
                href='../../assets/docs/round1.zip'
                download
                className={Styles.footer__link}
              >
                Учредительные документы Round 1
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
              КПП: 502801001 / ИНН: 9729264079
            </li>
            <li className={`${Styles.footer__listItem_gray} ${Styles.footer__listItem_city}`}>
              Юридический адрес компании: г. Можайск, улица Мира, дом 98
            </li>
          </ul>
          <ul className={`${Styles.footer__issuer} ${Styles.footer__list}`}>
            <div className={Styles.footer__listItemContainer}>
              <h3 className={Styles.footer_listTitle_noWrap}>Эмитент LIMC Round 1</h3>
              <li className={Styles.footer__listItem_gray}>QQ Global Markets LLC</li>
              <li className={Styles.footer__listItem_gray}>P.O. Box 1574</li>
              <li className={Styles.footer__listItem_gray}>Kingstown, VC 0100</li>
              <li className={Styles.footer__listItem_gray}>St. Vincent and the Grenadines</li>
            </div>
            <div className={Styles.footer__listItemContainer}>
              <h3 className={Styles.footer_listTitle}>Швейцария</h3>
              <li className={Styles.footer__listItem_gray}>В процессе регистрации</li>
            </div>
          </ul>
          <p className={Styles.footer__email}>info@limcore.io</p>
          <ul className={Styles.footer__social}>
            <li>
              <a href='https://twitter.com' target='blank' rel='noopener noreferrer' className={Styles.footer__link}>
                <img src={twitter} className={Styles.footer__socialIcon} />
              </a>
            </li>
            <li>
              {/* <a */}
              {/*  href='https://www.linkedin.com' */}
              {/*  target='blank' */}
              {/*  rel='noopener noreferrer' */}
              {/*  className={Styles.footer__link} */}
              {/* > */}
              {/*  <img src={linkedIn} className={Styles.footer__socialIcon} /> */}
              {/* </a> */}
              <a
                href='https://youtube.com/channel/UCjPwzyVtL5WQtRoqiR0ZdGg'
                target='blank'
                rel='noopener noreferrer'
                className={Styles.footer__YouTubeLink}
              >
                <img src={youTube} className={Styles.footer__YouTubeIcon} />
              </a>
            </li>
            <li>
              <a href='https://vk.com/' target='blank' rel='noopener noreferrer' className={Styles.footer__link}>
                <img src={vk} className={Styles.footer__socialIcon} />
              </a>
            </li>
            <li>
              <a
                href='https://instagram.com/limcore.io?utm_medium=copy_link'
                target='blank'
                rel='noopener noreferrer'
                className={Styles.footer__link}
              >
                <img src={insta} className={Styles.footer__socialIcon} />
              </a>
            </li>
            <li>
              <a href='https://t.me/limc_russ' target='blank' rel='noopener noreferrer' className={Styles.footer__link}>
                <img src={tg} className={Styles.footer__socialIcon} />
              </a>
            </li>
            <li>
              <a
                href='https://ru-ru.facebook.com/'
                target='blank'
                rel='noopener noreferrer'
                className={Styles.footer__link}
              >
                <img src={facebook} className={Styles.footer__socialIcon} />
              </a>
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
