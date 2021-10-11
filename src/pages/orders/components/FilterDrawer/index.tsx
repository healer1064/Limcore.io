import React from 'react'
import { Filter } from './components/Filter'
import Styles from './style.module.scss'

export const FilterDrawer = (props) => {
  return (
    <div className={Styles.filters_container}>
      <div className={Styles.content}>
        <Filter openFilter={props.isOpenFilter} />
      </div>
    </div>
  )
}
