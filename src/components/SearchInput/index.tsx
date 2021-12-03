import React, { InputHTMLAttributes } from 'react'
import Styles from './style.module.scss'
import search from '@icons/search.png'
import cancel from '@icons/cancel.svg'

interface SearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  text: string
  onChange?: (value: string | undefined) => void
  onReset?: () => void
}

export const SearchInput: React.FC<SearchInputProps> = ({ text, onChange, onReset }) => {
  return (
    <form className={Styles.input_container}>
      <img className={`${Styles.search_icon} ${Styles.input_iconContainer}`} src={search} alt='search' />
      <input
        className={Styles.search_input}
        type='text'
        value={text}
        onChange={(e) => (onChange ? onChange(e?.target?.value) : undefined)}
      />
      {text && (
        <button className={Styles.cancelIconContainer} onClick={onReset} type='reset'>
          <img className={Styles.cancel__icon} src={cancel} alt='cancel' />
        </button>
      )}
    </form>
  )
}
