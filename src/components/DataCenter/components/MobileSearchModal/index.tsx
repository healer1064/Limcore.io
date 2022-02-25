import React, { useState } from 'react'
import { BottomModal } from '@components/Modal/BottomModal'
import styles from './style.module.scss'
import { MobileSearch } from '../Search/MobileSearch'
import { ReactComponent as SearchIcon } from '@icons/searchGlass.svg'

export const MobileSearchModal = () => {
  const [active, setActive] = useState(false)
  return (
    <>
      <button onClick={() => setActive(true)} type='button' className={styles.mobile_search_button}>
        <SearchIcon />
      </button>
      <BottomModal active={active} setActive={(active) => setActive(!active)}>
        <div className={styles.search_wrapper}>
          <MobileSearch />
        </div>
      </BottomModal>
    </>
  )
}
