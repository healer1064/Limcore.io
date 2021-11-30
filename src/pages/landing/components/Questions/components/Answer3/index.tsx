import React from 'react'
import { useTranslation } from 'react-i18next'
import Styles from './styles.module.scss'

interface Answer3Props {
  list?: string
}

export const Answer3: React.FC<Answer3Props> = ({ list }) => {
  const [t] = useTranslation()

  return (
    <li>
      <ul className={list === 'mobile' ? `${Styles.list} ${Styles.list_mod}` : `${Styles.list}`}>
        <li className={Styles.text}>{t('qa_card3_subtitle1')}</li>
        <li className={Styles.text}>{t('qa_card3_subtitle2')}</li>
        <li className={Styles.text}>{t('qa_card3_subtitle3')}</li>
        <li className={Styles.text}>{t('qa_card3_subtitle4')}</li>
        <li className={Styles.text}>{t('qa_card3_subtitle5')}</li>
        <li className={Styles.text}>{t('qa_card3_subtitle6')}</li>
      </ul>
      <p className={Styles.text}>{t('qa_card3_subtitle7')}</p>
    </li>
  )
}
