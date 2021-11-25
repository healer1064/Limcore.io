import React, { useState } from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import closeButton from '@icons/greyClose.svg'

export const SearchForm = ({ desktop }) => {
  const [t] = useTranslation()
  const [searched, setSearched] = useState('')
  const [closeButtonVisible, setCloseButtonVisible] = useState(false)
  const [resetButtonVisible, setResetButtonVisible] = useState(false)

  const handleChange = (e) => {
    setSearched(e.target.value)
    setCloseButtonVisible(true)
  }

  const handleResetButton = () => {
    setResetButtonVisible(true)
  }

  const handleCloseSearch = (e) => {
    setSearched('')
  }

  return (
    <>
      <form className={!desktop ? styles.searchForm : styles.searchForm_desktop}>
        <input
          type='search'
          className={styles.searchInput}
          placeholder={t('chat_form_placeholder')}
          onChange={(e) => handleChange(e)}
          onFocus={handleResetButton}
          value={searched}
        />
        <img
          className={closeButtonVisible ? styles.closeButton : styles.closeButton_invisible}
          alt=''
          src={closeButton}
          onClick={(e) => handleCloseSearch(e)}
        />
        <button type='reset' className={resetButtonVisible ? styles.resetButton : styles.resetButton_invisible}>
          {t('chat_reset_button_value')}
        </button>
      </form>
      <p className={`${styles.subtitle} ${styles.subtitle_invisible}`}>{t('chat_no_results')}</p>
      <p className={`${styles.text} ${styles.text_invisible}`}>{`${t('chat_no_results_text')} '${searched}'`}</p>
      <p className={`${styles.text} ${styles.text_invisible}`}>{t('chat_no_results_try')}</p>
    </>
  )
}
