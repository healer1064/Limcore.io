import React from 'react'
import styles from './styles.module.scss'
import { FooterMobile } from '@components/Footer/FooterMobile'
import { SearchForm } from '@components/Chat/components/SearchForm'
import { useTranslation } from 'react-i18next'
import { HeaderMobile } from '@components/Header/HeaderMobile'

export const Chat = () => {
  const [t] = useTranslation()

  return (
    <div className={styles.chat}>
      <SearchForm />
      <FooterMobile />
    </div>
  )
}
