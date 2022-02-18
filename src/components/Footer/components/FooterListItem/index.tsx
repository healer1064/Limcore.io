import React from 'react'
import Styles from '@components/Footer/styles.module.scss'
import { Link } from 'react-router-dom'

interface IFooterListItem {
  children?: string
  link?: string
  className: string
}

export const FooterListItem = ({ children, link, className }: IFooterListItem) => {
  return (
    <li className={className}>
      <Link className={Styles.footer__link} to={link}>
        {children}
      </Link>
    </li>
  )
}
