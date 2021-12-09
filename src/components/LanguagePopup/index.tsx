import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { VectorIcon } from '@icons/VectorIcon'
import classNames from 'classnames'
import RUS from '../../assets/icons/flag-ru.svg'
import ENG from '../../assets/icons/flag-en.svg'
import CHN from '../../assets/icons/flag-cn.svg'
import Styles from './styles.module.scss'
import useWindowSize from '@helpers/useWindowSizeHook'

interface ILanguagePopupProps {
  position?: {
    top?: string
    left?: string
    background?: string
  }

  footerStyles?: boolean
}

export const LanguagePopup = ({ position, footerStyles }: ILanguagePopupProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [t, i18n] = useTranslation()
  const { width } = useWindowSize()
  const mobile = width < 769
  const [showPopapLanguage, setShowPopapLanguage] = useState(false)

  // Прокидывание позиции окна выбора языка
  const elLangOptionsStyles = position || { top: '30px', left: '-33px', background: '#f9f9f7' }

  // Извращения с стилями для футера
  const footerLangStyles = footerStyles ? { height: '100%', marginBottom: '25px' } : {}
  const footerBlockStyles = footerStyles && mobile ? { marginBottom: '20px' } : {}

  const languages = ['ru', 'en', 'cn']
  const changeLanguage = (lang) => {
    console.log(lang)
    i18n.changeLanguage(lang)
    setShowPopapLanguage(false)
  }

  return (
    <div className={Styles.lang} style={footerLangStyles}>
      <div
        className={classNames(Styles.block, showPopapLanguage && Styles.active)}
        onClick={() => setShowPopapLanguage(!showPopapLanguage)}
        style={footerBlockStyles}
      >
        {i18n.language === 'ru' && (
          <>
            <img src={RUS} alt='Флаг' className={Styles.img} />
            <span className={Styles.langTitle}>RU</span>
          </>
        )}
        {i18n.language === 'en' && (
          <>
            <img src={ENG} alt='Флаг' className={Styles.img} />
            <span className={Styles.langTitle}>EN</span>
          </>
        )}
        {i18n.language === 'cn' && (
          <>
            <img src={CHN} alt='Флаг' className={Styles.img} />
            <span className={Styles.langTitle}>CN</span>
          </>
        )}

        <span className={classNames(showPopapLanguage && Styles.arrowActive, Styles.arrow)}>
          <VectorIcon />
        </span>
      </div>
      <div
        className={classNames(Styles.el__langoptions, showPopapLanguage && Styles.active)}
        style={elLangOptionsStyles}
      >
        {languages.map((lang) => {
          let divClass = null
          let text = null

          switch (lang) {
            case 'ru':
              divClass = `${Styles.langoption} ${Styles.langoption_ru}`
              text = 'RU'
              break
            case 'en':
              divClass = `${Styles.langoption} ${Styles.langoption_ru}`
              text = 'EN'
              break
            case 'cn':
              divClass = `${Styles.langoption} ${Styles.langoption_cn}`
              text = 'CN'
              break
          }

          return (
            <div key={lang} className={divClass}>
              <input
                className={Styles.langoption__checked}
                type='radio'
                id={lang}
                name='languages'
                value={lang}
                checked={i18n.language === lang}
                onChange={() => changeLanguage(lang)}
                readOnly
              />
              <div className={Styles.lang_box}>
                {lang === 'ru' && <img src={RUS} alt='Флаг' className={Styles.lang__img} />}
                {lang === 'en' && <img src={ENG} alt='Флаг' className={Styles.lang__img} />}
                {lang === 'cn' && <img src={CHN} alt='Флаг' className={Styles.lang__img} />}

                <label
                  className={`${Styles.langoption__text} ${i18n.language === lang && Styles.langoption__text_checked}`}
                  htmlFor={lang}
                  onClick={() => setShowPopapLanguage(false)}
                >
                  {text}
                </label>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
