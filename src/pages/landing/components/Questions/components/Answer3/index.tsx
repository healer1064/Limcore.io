import React from 'react'
import { useTranslation } from 'react-i18next'
import Styles from './styles.module.scss'

interface Answer3Props {
  list?: string
}

export const Answer3: React.FC<Answer3Props> = ({ list }) => {
  const [t] = useTranslation()

  return (
    <>
      <ul className={list === 'mobile' ? `${Styles.list} ${Styles.list_mod}` : `${Styles.list}`}>
        <li>
          <p className={Styles.text}>{t('qa_card3_subtitle1')}</p>
        </li>
        <li>
          <p className={Styles.text}>{t('qa_card3_subtitle2')}</p>
        </li>
        <li>
          <p className={Styles.text}>{t('qa_card3_subtitle3')}</p>
        </li>
        <li>
          <p className={Styles.text}>{t('qa_card3_subtitle4')}</p>
        </li>
        <li>
          <p className={Styles.text}>{t('qa_card3_subtitle5')}</p>
        </li>
        <li>
          <p className={Styles.text}>{t('qa_card3_subtitle6')}</p>
        </li>
      </ul>
      <p className={Styles.text}>{t('qa_card3_subtitle7')}</p>
    </>
  )
}
