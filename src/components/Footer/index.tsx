import React, { useState } from 'react'
import Styles from './styles.module.scss'

// import logo from '../../assets/icons/LimLogo.png'
// import logo from '../../assets/icons/FooterLogo.svg'
// import twitter from '../../assets/icons/twitter-icon.png'
// import linkedIn from '../../assets/icons/linkedIn-icon.png'
// import vk from '../../assets/icons/vk-icon.png'
import insta from '@icons/instagram-logo.svg'
import tg from '@icons/telegram-logo.svg'
// import facebook from '../../assets/icons/facebook-icon.png'
import youTube from '../../assets/icons/SF Symbol/play.fill.svg'
import { FooterLogo } from '@components/Footer/components/FooterLogo'
// import booklet from '../../assets/files/booklet.pdf'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { VectorIcon } from '@icons/VectorIcon'
import RUS from '../../assets/icons/flag-ru.svg'
import ENG from '../../assets/icons/flag-en.svg'
import classNames from 'classnames'

export const Footer: React.FC = () => {
  const [t, i18n] = useTranslation()
  const [showPopapLanguage, setShowPopapLanguage] = useState(false)

  const languages = ['ru', 'en']
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
    setShowPopapLanguage(false)
  }

  return (
    <footer className={Styles.footer}>
      <div className={Styles.wrapper}>
        <div className={Styles.footer__container}>
          {/* <img src={logo} alt='Logo' className={Styles.logo} /> */}
          <FooterLogo />
          <div
            className={classNames(Styles.block, showPopapLanguage && Styles.active)}
            onClick={() => setShowPopapLanguage(!showPopapLanguage)}
          >
            <img src={i18n.language === 'ru' ? RUS : ENG} alt='Флаг' className={Styles.img} />
            <span className={Styles.langTitle}>{i18n.language === 'ru' ? 'RU' : 'EN'}</span>
            <span className={classNames(showPopapLanguage && Styles.arrowActive, Styles.arrow)}>
              <VectorIcon />
            </span>
          </div>
          <div className={classNames(Styles.footer__langoptions, showPopapLanguage && Styles.active)}>
            {languages.map((lang) => (
              <div
                key={lang}
                className={`${Styles.langoption} ${lang === 'ru' ? Styles.langoption_ru : Styles.langoption_en}`}
                onClick={() => setShowPopapLanguage(false)}
              >
                <input
                  className={Styles.langoption__checked}
                  type='radio'
                  id={lang}
                  name='languages'
                  value={lang}
                  checked={i18n.language === lang}
                  onChange={() => {
                    changeLanguage(lang)
                  }}
                  readOnly
                />
                <div className={Styles.lang_box}>
                  <img src={lang === 'ru' ? RUS : ENG} alt='Флаг' className={Styles.lang__img} />
                  <label
                    className={`${Styles.langoption__text} ${
                      i18n.language === lang && Styles.langoption__text_checked
                    }`}
                    htmlFor={lang}
                  >
                    {lang === 'ru' ? 'RU' : 'EN'}
                  </label>
                </div>
              </div>
            ))}
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
                  {t('footer_leaflet')}
                </Link>
              </li>
            </div>
          </ul>
          <ul className={`${Styles.footer__information} ${Styles.footer__list}`}>
            <h3 className={Styles.footer_listTitle}>{t('footer_infoDeclosure')}</h3>
            <li className={Styles.footer__listItem}>
              <Link className={Styles.footer__link} to='/files/docs.zip' download target='_blank'>
                {t('footer_docsRF')}
              </Link>
            </li>
            <li className={Styles.footer__listItem}>
              <Link className={Styles.footer__link} to='/files/round1.zip' download target='_blank'>
                {t('footer_docsRound1')}
              </Link>
            </li>
            <li className={Styles.footer__listItem}>
              <a href='#' target='_blank' rel='noopener noreferrer' className={Styles.footer__link}>
                {t('footer_equipInsurance')}
              </a>
            </li>
            <li className={Styles.footer__listItem}>
              <a href='#' target='blank' rel='noopener noreferrer' className={Styles.footer__link}>
                {t('footer_buildingInsurance')}
              </a>
            </li>
          </ul>
          <ul className={`${Styles.footer__users} ${Styles.footer__list}`}>
            <h3 className={Styles.footer_listTitle}>{t('footer_coop')}</h3>
            <li className={Styles.footer__listItem}>
              <Link className={Styles.footer__link} to='/files/termsConditions.docx' download target='_blank'>
                {t('footer_agreementPersonalData')}
              </Link>
            </li>
            <li className={Styles.footer__listItem}>
              <a href='#' target='blank' rel='noopener noreferrer' className={Styles.footer__link}>
                <Link className={Styles.footer__link} to='/files/offerBuyLimcore.docx' download target='_blank'>
                  {t('footer_agreementLimcBuy')}
                </Link>
              </a>
            </li>
          </ul>
          <div className={Styles.footer__line} />
          <ul className={`${Styles.footer__address} ${Styles.footer__list}`}>
            <h3 className={Styles.footer_listTitle}>{t('footer_russia')}</h3>
            <li className={`${Styles.footer__listItem_gray} ${Styles.footer__listItem_address}`}>
              {t('footer_fullOrganisationName')}
            </li>
            <li className={`${Styles.footer__listItem_gray} ${Styles.footer__listItem_address}`}>{t('footer_docs')}</li>
            <li className={`${Styles.footer__listItem_gray} ${Styles.footer__listItem_city}`}>{t('footer_address')}</li>
          </ul>
          <ul className={`${Styles.footer__issuer} ${Styles.footer__list}`}>
            <div className={Styles.footer__listItemContainer}>
              <h3 className={Styles.footer_listTitle_noWrap}>{t('footer_issuer')}</h3>
              <li className={Styles.footer__listItem_gray}>QQ Global Markets LLC</li>
              <li className={Styles.footer__listItem_gray}>P.O. Box 1574</li>
              <li className={Styles.footer__listItem_gray}>Kingstown, VC 0100</li>
              <li className={Styles.footer__listItem_gray}>St. Vincent and the Grenadines</li>
            </div>
            <div className={Styles.footer__listItemContainer}>
              <h3 className={Styles.footer_listTitle}>{t('footer_switzerland')}</h3>
              <li className={Styles.footer__listItem_gray}>{t('footer_inRegProcess')}</li>
            </div>
          </ul>
          <p className={Styles.footer__email}>
            <a href='mailto:info@limcore.io'>info@limcore.io</a>
          </p>
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
