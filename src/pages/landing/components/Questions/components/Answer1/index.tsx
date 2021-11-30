import React from 'react'
import { useTranslation } from 'react-i18next'
import Styles from './styles.module.scss'

export const Answer1 = () => {
  const [t] = useTranslation()

  return (
    <li>
      <p className={Styles.text}>{t('qa_card1_subtitle1')}</p>
      <p className={Styles.text}>{t('qa_card1_subtitle2')}</p>
      <p className={Styles.text}>{t('qa_card1_subtitle3')}</p>
    </li>
  )
}
