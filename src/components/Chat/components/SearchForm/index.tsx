import React, { ChangeEvent, useState, useEffect } from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import closeButton from '@icons/greyClose.svg'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setFilteredDialogues } from '../../../Chat/redux/chatSlice'
import { getUserName } from '@components/Chat/utils/funcs'

type TButtonsVisibility = '' | 'close' | 'reset'

export const SearchForm = ({ desktop }) => {
  const [t] = useTranslation()
  const dispatch = useAppDispatch()

  const dialogues = useAppSelector((state) => state.chat.dialogues)

  const [buttonsVisibility, setButtonsVisibility] = useState<TButtonsVisibility>('')
  const [searched, setSearched] = useState('')

  const handleResetButton = (e) => {
    e.preventDefault()
    setButtonsVisibility('reset')
  }

  const handleCloseSearch = (e) => {
    e.preventDefault()
    setSearched('')
    setButtonsVisibility('')
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setButtonsVisibility('close')
    setSearched(event.target.value)
  }

  useEffect(() => {
    if (searched === '') {
      dispatch(setFilteredDialogues(dialogues))
      return
    }
    const searchString = searched.toLowerCase()
    const filtered = dialogues.filter((dialogue) => {
      if (dialogue.other_user) {
        return getUserName(dialogue.other_user).toLowerCase().includes(searchString.toLowerCase())
      } else {
        return dialogue.name.toLowerCase().includes(searchString.toLowerCase())
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
          // onFocus={handleResetButton}
          value={searched}
        />
        {(buttonsVisibility === 'close' || buttonsVisibility === 'reset') && (
          <img className={styles.closeButton} alt='button' src={closeButton} onClick={(e) => handleCloseSearch(e)} />
        )}
        {buttonsVisibility === 'reset' && (
          <button type='reset' className={styles.resetButton} onClick={(e) => handleResetButton(e)}>
            {t('chat_reset_button_value')}
          </button>
        )}
      </form>
    </>
  )
}
