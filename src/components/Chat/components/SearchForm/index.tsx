import React, { ChangeEvent, useState, useEffect } from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import closeButton from '@icons/greyClose.svg'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setFilteredDialogues } from '../../../Chat/redux/chatSlice'

type TButtonsVisibility = '' | 'close' | 'reset'

export const SearchForm = ({ desktop }) => {
  const [t] = useTranslation()
  const dispatch = useAppDispatch()

  const dialogues = useAppSelector((state) => state.chat.dialogues)

  const [buttonsVisibility, setButtonsVisibility] = useState<TButtonsVisibility>('')
  const [searched, setSearched] = useState('')

  const handleResetButton = () => {
    setButtonsVisibility('reset')
  }

  const handleCloseSearch = () => {
    setSearched('')
    setButtonsVisibility('')
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setButtonsVisibility('close')
    setSearched(event.target.value)
  }

  useEffect(() => {
    if (searched === '') {
      dispatch(setFilteredDialogues(dialogues))
    }
    const filtered = dialogues.filter((dialogue) => {
      if (dialogue.other_user) {
        if (dialogue.other_user.first_name) {
          return dialogue.other_user.first_name.toLowerCase().includes(searched)
        } else if (dialogue.other_user.last_name) {
          return dialogue.other_user.last_name.toLowerCase().includes(searched)
        }
      } else {
        if (dialogue.name) {
          return dialogue.name.toLowerCase().includes(searched)
        }
      }
    })
    dispatch(setFilteredDialogues(filtered))
  }, [dialogues, searched])

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
        {(buttonsVisibility === 'close' || buttonsVisibility === 'reset') && (
          <img className={styles.closeButton} alt='' src={closeButton} onClick={handleCloseSearch} />
        )}
        {buttonsVisibility === 'reset' && (
          <button type='reset' className={styles.resetButton}>
            {t('chat_reset_button_value')}
          </button>
        )}
      </form>
    </>
  )
}
