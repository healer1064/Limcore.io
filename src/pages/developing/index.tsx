import React from 'react'
import { useLocation } from 'react-router-dom'
import Styles from './style.module.scss'
import { DevelopLogo } from './devLogo'

const reportingText = {
  withText: 'отчетностью',
  text: 'созданную отчетность',
}

const agreementsText = {
  withText: 'договорами',
  text: 'созданные договора',
}

export const DevelopingPage = () => {
  const location = useLocation()
  const textObject = location.pathname === '/agreements' ? agreementsText : reportingText
  return (
    <div className={Styles.dev_container}>
      <div className={Styles.dev_content}>
        <DevelopLogo />
        <div className={Styles.develop_text_container}>
          <span>Мы непрерывно работаем над улучшением каждого из сервисов.</span>
          <span>{`Скоро вы сможете работать с ${textObject?.withText} прямо на этой странице не покидая портал.`}</span>
        </div>
      </div>
    </div>
  )
}
