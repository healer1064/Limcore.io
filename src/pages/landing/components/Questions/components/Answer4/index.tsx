import React from 'react'
import { useTranslation } from 'react-i18next'
import Styles from './styles.module.scss'

export const Answer4 = () => {
  const [t] = useTranslation()

  return (
    <li>
      <p className={Styles.text}>{t('qa_card4_subtitle1')}</p>
      <p className={Styles.text}>{t('qa_card4_subtitle2')}</p>
      <p className={Styles.text}>{t('qa_card4_subtitle3')}</p>
      <p className={Styles.text}>{t('qa_card4_subtitle4')}</p>
      <p className={Styles.text}>{t('qa_card4_subtitle5')}</p>
      <p className={Styles.text}>{t('qa_card4_subtitle6')}</p>
    </li>
  )
}
