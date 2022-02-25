import React, { useRef, useState } from 'react'
import styles from './styles.module.scss'
import { SearchIcon } from '@components/SearchInput/SearchIcon'
import clsx from 'clsx'
import { CloseIcon } from '@icons/CloseIcon'

export const MobileSearch: React.FC<any> = () => {
  const [inSearch, setInSearch] = useState(false)
  const [value, setValue] = useState('')
  const [searchData, setSearchData] = useState('')
  const inputEl = useRef(null)

  const search = () => {
    setInSearch(true)
    setSearchData(value)
    setValue((prev) => {
      if (prev.length > 16) {
        return prev.substr(0, 16) + '...' + prev.substr(prev.length - 10, prev.length)
      } else {
        return prev
      }
    })
  }

  const onBlurHandler = (e) => {
    if (e.relatedTarget?.id !== 'searchBtn') {
      if (value) {
        search()
      }
    }
  }

  const onBtnClickHandler = (e) => {
    if (open) {
      if (value) {
        search()
      } else {
        inputEl.current.focus()
      }
    } else {
      inputEl.current.focus()
    }
  }

  const resetHandler = () => {
    setInSearch(false)
    setSearchData('')
    setValue('')
    inputEl.current.focus()
  }

  const inputClickHandler = () => {
    setValue(searchData)
    setInSearch(false)
    inputEl.current.focus()
  }

  return (
    <div className={styles.searchWrapper}>
      {inSearch && <div className={styles.inputButton} onClick={inputClickHandler} />}
      <input
        ref={inputEl}
        type='text'
        placeholder='Введите адрес кошелька'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={clsx(styles.searchInput, styles.active)}
        onBlur={onBlurHandler}
        // disabled={inSearch}
        onClick={inputClickHandler}
      />
      {inSearch ? (
        <button type='button' className={styles.close_button} onClick={resetHandler}>
          <CloseIcon />
        </button>
      ) : (
        <button
          id='searchBtn'
          type='button'
          className={clsx(styles.search_button, styles.active)}
          onClick={onBtnClickHandler}
        >
          <SearchIcon />
        </button>
      )}
    </div>
  )
}
