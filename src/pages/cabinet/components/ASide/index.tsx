import React from 'react'

import styles from './styles.module.scss'
import { Rating } from './Rating'
import { Chat } from './Chat'
import { RefLink } from './RefLink'
import { NewCard } from './NewCard'

interface ASideProps {
  clientWidth: number
}

export const ASide: React.FC<ASideProps> = ({ clientWidth }) => {
  return (
    <div className={styles.ASide} style={{ margin: clientWidth > 1265 ? '0 42px 0 0' : '0 0 20px 0' }}>
      <Rating />
      <Chat />
      <RefLink />
      <NewCard clientWidth={clientWidth} />
    </div>
  )
}
