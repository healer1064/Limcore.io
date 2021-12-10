import React, { useState } from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import closeButton from '@icons/greyClose.svg'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setIsSearched } from '../../../Chat/redux/chatSlice'

export const SearchForm = ({ desktop }) => {
  const [t] = useTranslation()

  const searched = useAppSelector((state) => state.chat.searchedValue)
  const [isButtonVisible, setIsButtonVisible] = useState('') // '' | 'close' | 'reset'
  const dispatch = useAppDispatch()

  const handleChange = (e) => {
    dispatch(setIsSearched(e.target.value))
    setIsButtonVisible('close')
  }

  const handleResetButton = () => {
    setIsButtonVisible('reset')
  }

  const handleCloseSearch = () => {
    dispatch(setIsSearched(''))
    setIsButtonVisible('')
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
        {(isButtonVisible === 'close' || isButtonVisible === 'reset') && (
          <img className={styles.closeButton} alt='' src={closeButton} onClick={handleCloseSearch} />
        )}
        {isButtonVisible === 'reset' && (
          <button type='reset' className={styles.resetButton}>
            {t('chat_reset_button_value')}
          </button>
        )}
      </form>
    </>
  )
}
