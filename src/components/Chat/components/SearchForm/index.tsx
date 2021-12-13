import React, { ChangeEvent, useState } from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import closeButton from '@icons/greyClose.svg'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setDialogues } from '../../../Chat/redux/chatSlice'

export const SearchForm = ({ desktop }) => {
  const [t] = useTranslation()
  const dispatch = useAppDispatch()

  // const searched = useAppSelector((state) => state.chat.searchedValue)
  const dialogues = useAppSelector((state) => state.chat.dialogues)

  const [isButtonVisible, setIsButtonVisible] = useState('') // '' | 'close' | 'reset'
  const [searched, setSearched] = useState('')

  const handleResetButton = () => {
    setIsButtonVisible('reset')
  }

  const handleCloseSearch = () => {
    setSearched('')
    setIsButtonVisible('')
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsButtonVisible('close')
    setSearched(event.target.value)

    const filtered = dialogues.filter((dialogue) => {
      return (
        dialogue.other_user?.first_name.toLowerCase().includes(event.target.value) ||
        dialogue.other_user?.last_name.toLowerCase().includes(event.target.value) ||
        dialogue.name?.toLowerCase().includes(event.target.value)
      )
    })
    console.log(filtered)
  }

  return (
    <>
      <form className={desktop ? styles.searchForm_desktop : styles.searchForm}>
        <input
          type='search'
          className={styles.searchInput}
          placeholder={t('chat_form_placeholder')}
          onChange={handleInputChange}
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
