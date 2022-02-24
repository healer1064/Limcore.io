import React, { useState } from 'react'
import styles from './styles.module.scss'
import { SearchIcon } from '@components/SearchInput/SearchIcon'
import clsx from 'clsx'

export const Search: React.FC<any> = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.searchWrapper}>
      <input
        type='text'
        placeholder='Введите адрес кошелька'
        className={clsx(styles.searchInput, open && styles.active)}
      />
      <button
        type='button'
        className={clsx(styles.search_button, open && styles.active)}
        onClick={() => setOpen((prev) => !prev)}
      >
        <SearchIcon />
      </button>
    </div>
  )
}
