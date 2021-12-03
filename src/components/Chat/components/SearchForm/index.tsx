import React from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import closeButton from '@icons/greyClose.svg'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setIsSearched, setIsButtonVisible } from '../../../Chat/redux/chatSlice'

export const SearchForm = ({ desktop }) => {
  const [t] = useTranslation()

  const searched = useAppSelector((state) => state.chat.isSearched)
  const buttonVisible = useAppSelector((state) => state.chat.isButtonVisible)
  const dispatch = useAppDispatch()

  const handleChange = (e) => {
    dispatch(setIsSearched(e.target.value))
    dispatch(setIsButtonVisible('close'))
  }

  const handleResetButton = () => {
    dispatch(setIsButtonVisible('reset'))
  }

  const handleCloseSearch = () => {
    dispatch(setIsSearched(''))
    dispatch(setIsButtonVisible(''))
  }

  return (
    <>
      <form className={desktop ? styles.searchForm_desktop : styles.searchForm}>
        <input
          type='search'
          className={styles.searchInput}
          placeholder={t('chat_form_placeholder')}
          onChange={(e) => handleChange(e)}
          onFocus={handleResetButton}
          value={searched}
        />
        {(buttonVisible === 'close' || buttonVisible === 'reset') && (
          <img className={styles.closeButton} alt='' src={closeButton} onClick={handleCloseSearch} />
        )}
        {buttonVisible === 'reset' && (
          <button type='reset' className={styles.resetButton}>
            {t('chat_reset_button_value')}
          </button>
        )}
      </form>
    </>
  )
}
