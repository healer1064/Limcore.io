import React, { useState } from 'react'
import Styles from './styles.module.scss'

// import logo from '../../assets/icons/LimLogo.png'
// import logo from '../../assets/icons/FooterLogo.svg'
// import RU from '../../assets/images/flag-ru.svg'
import RUS from '../../assets/images/russia-flag.png'
import ENG from '../../assets/images/en-flag.png'
// import EN from '../../assets/images/flag-en.svg'
import arrow from '../../assets/icons/grey-arrow-down.png'
import twitter from '../../assets/icons/twitter-icon.png'
import linkedIn from '../../assets/icons/linkedIn-icon.png'
import vk from '../../assets/icons/vk-icon.png'
import insta from '../../assets/icons/insta-icon.png'
import tg from '../../assets/icons/telegram-icon.png'
import facebook from '../../assets/icons/facebook-icon.png'
import youTube from '../../assets/icons/SF Symbol/play.fill.svg'
import { FooterLogo } from '@components/Footer/components/FooterLogo'
// import booklet from '../../assets/files/booklet.pdf'
import { Link } from 'react-router-dom'

export const Footer: React.FC = () => {
  const [showPopapLanguage, setShowPopapLanguage] = useState(false)
  const [valueLanguage, setValueLanguage] = useState('ru')
  return (
    <footer className={Styles.footer}>
      <div className={Styles.wrapper}>
        <div className={Styles.footer__container}>
          {/* <img src={logo} alt='Logo' className={Styles.logo} /> */}
          <FooterLogo />
          <div className={Styles.lang}>
            <div className={Styles.block} onClick={() => setShowPopapLanguage(!showPopapLanguage)}>
              <img src={valueLanguage === 'ru' ? RUS : ENG} alt='Флаг' className={Styles.img} />
              <span className={Styles.lang__value}>{valueLanguage}</span>
              <img src={arrow} className={showPopapLanguage && Styles.arrow} />
            </div>
            {showPopapLanguage && (
              <div className={Styles.header__langoptions}>
                <div className={`${Styles.langoption} ${Styles.langoption_ru}`}>
                  <input
                    className={Styles.langoption__checked}
                    type='radio'
                    name='radio1'
                    id='answer1'
                    onClick={() => setValueLanguage('ru')}
                    checked
                    readOnly
                  />
                  <div className={Styles.lang_box}>
                    <img src={RUS} alt='Флаг' className={Styles.lang__img} />
                    <label
                      className={`${Styles.langoption__text} ${
                        valueLanguage === 'ru' && Styles.langoption__text_checked
                      }`}
                      htmlFor='answer1'
                    >
                      RU
                    </label>
                  </div>
                </div>
                <div className={`${Styles.langoption} ${Styles.langoption_en}`}>
                  <input
                    className={Styles.langoption__checked}
                    type='radio'
                    name='radio1'
                    id='answer2'
                    onClick={() => setValueLanguage('en')}
                    readOnly
                  />
                  <div className={Styles.lang_box}>
                    <img src={ENG} alt='Флаг' className={Styles.lang__img} />
                    <label
                      className={`${Styles.langoption__text} ${
                        valueLanguage === 'en' && Styles.langoption__text_checked
                      }`}
                      htmlFor='answer2'
                    >
                      EN
                    </label>
                  </div>
                </div>
              </div>
            )}
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
                <Link className={Styles.footer__link} to='/files/booklet.pdf' download target='_blank'>
                  Рекламный буклет
                </Link>
              </li>
            </div>
          </ul>
          <ul className={`${Styles.footer__information} ${Styles.footer__list}`}>
            <h3 className={Styles.footer_listTitle}>Раскрытие информации</h3>
            <li className={Styles.footer__listItem}>
              <Link className={Styles.footer__link} to='/files/docs.zip' download target='_blank'>
                Учредительные документы РФ
              </Link>
            </li>
            <li className={Styles.footer__listItem}>
              <Link className={Styles.footer__link} to='/files/round1.zip' download target='_blank'>
                Учредительные документы Round 1
              </Link>
            </li>
            <li className={Styles.footer__listItem}>
              <a href='#' target='_blank' rel='noopener noreferrer' className={Styles.footer__link}>
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
            {/* <li>
              <a href='https://twitter.com' target='blank' rel='noopener noreferrer' className={Styles.footer__link}>
                <img src={twitter} className={Styles.footer__socialIcon} />
              </a>
            </li> */}
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
            {/* <li>
              <a href='https://vk.com/' target='blank' rel='noopener noreferrer' className={Styles.footer__link}>
                <img src={vk} className={Styles.footer__socialIcon} />
              </a>
            </li> */}
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
            {/* <li>
              <a
                href='https://ru-ru.facebook.com/'
                target='blank'
                rel='noopener noreferrer'
                className={Styles.footer__link}
              >
                <img src={facebook} className={Styles.footer__socialIcon} />
              </a>
            </li> */}
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
