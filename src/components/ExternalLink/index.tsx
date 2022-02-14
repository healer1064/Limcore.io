import React from 'react'
import styles from './style.module.scss'
import { ReactComponent as ArrowUpRight } from '@icons/arrow-up-right.svg'

export interface IExternalLink {
  link: string
  text: string
}

export const ExternalLink: React.FC<IExternalLink> = ({ link, text }) => {
  return (
    <a href={link} target='_blank' rel='noreferrer' className={styles.external}>
      {text}
      <ArrowUpRight className={styles.icon} />
    </a>
  )
}
