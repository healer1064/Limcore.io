import React from 'react'

import styles from './styles.module.scss'

interface OtherButtonProps {
  onClick?: () => unknown
}

export const OtherButton: React.FC<OtherButtonProps> = ({ onClick }) => {
  return (
    <div className={styles.otherButton} onClick={onClick}>
      <div />
      <div />
      <div />
    </div>
  )
}
