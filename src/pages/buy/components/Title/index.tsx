import React from 'react'
import Styles from './style.module.scss'

export const Title = ({ title = 'Покупка' }) => {
  return <h1 className={Styles.title}>{title}</h1>
}
