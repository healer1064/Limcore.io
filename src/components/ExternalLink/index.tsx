import React from 'react'
import styles from './style.module.scss'
import { ReactComponent as ArrowUpRight } from '@icons/arrow-up-right.svg'
import clsx from 'clsx'

export interface IExternalLink {
  link: string
  text: string
  isMobile?: boolean
}

export const ExternalLink: React.FC<IExternalLink> = ({ link, text, isMobile }) => {
  const style = clsx({
    [styles.external]: true,
    [styles.external_mobile]: isMobile,
  })
  const iconStyle = clsx({
    [styles.icon]: true,
    [styles.icon_mobile]: isMobile,
  })
  return (
    <a href={link} target='_blank' rel='noreferrer' className={style}>
      {text}
      <ArrowUpRight className={iconStyle} />
    </a>
  )
}
