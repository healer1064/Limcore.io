import React from 'react'
import { useTranslation } from 'react-i18next'
import Styles from './styles.module.scss'

export const Answer2 = () => {
  const [t] = useTranslation()

  return (
    <>
      <p className={Styles.text}>{t('qa_card2_subtitle1')}</p>
      <p className={Styles.text}>{t('qa_card2_subtitle2')}</p>
      <p className={Styles.text}>{t('qa_card2_subtitle3')}</p>
      <p className={Styles.text}>{t('qa_card2_subtitle4')}</p>
      <p className={Styles.text}>{t('qa_card2_subtitle5')}</p>
      <p className={Styles.text}>{t('qa_card2_subtitle6')}</p>
    </>
  )
}
