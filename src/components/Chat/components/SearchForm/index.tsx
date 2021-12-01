import React from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import closeButton from '@icons/greyClose.svg'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setIsSearched, setCloseButtonVisible, setResetButtonVisible } from '../../../Chat/redux/chatSlice'

export const SearchForm = ({ desktop }) => {
  const [t] = useTranslation()

  const searched = useAppSelector((state) => state.chat.isSearched)
  const closeButtonVisible = useAppSelector((state) => state.chat.closeButtonVisible)
  const resetButtonVisible = useAppSelector((state) => state.chat.resetButtonVisible)
  const dispatch = useAppDispatch()

  const handleChange = (e) => {
    dispatch(setIsSearched(e.target.value))
    dispatch(setCloseButtonVisible(true))
  }

  const handleResetButton = () => {
    dispatch(setResetButtonVisible(true))
  }

  const handleCloseSearch = () => {
    dispatch(setIsSearched(''))
  }

  return desktop ? (
    <>
      <form className={styles.searchForm_desktop}>
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
          onClick={handleCloseSearch}
        />
        <button type='reset' className={resetButtonVisible ? styles.resetButton : styles.resetButton_invisible}>
          {t('chat_reset_button_value')}
        </button>
      </form>
      <p className={`${styles.subtitle} ${styles.subtitle_invisible}`}>{t('chat_no_results')}</p>
      <p className={`${styles.text} ${styles.text_invisible}`}>{`${t('chat_no_results_text')} '${searched}'`}</p>
      <p className={`${styles.text} ${styles.text_invisible}`}>{t('chat_no_results_try')}</p>
    </>
  ) : (
    <>
      <form className={styles.searchForm}>
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
          onClick={handleCloseSearch}
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
