import React from 'react'
import Styles from './styles.module.scss'
import useWindowSize from '@helpers/useWindowSizeHook'

import { FooterShortedDesktop } from './components/FooterShortedDesktop'
import { FooterShortedMobile } from './components/FooterShortedMobile'

export const FooterShorted: React.FC = () => {
  const { width } = useWindowSize()
  const desktop = width >= 769

  return <footer className={Styles.footer}>{desktop ? <FooterShortedDesktop /> : <FooterShortedMobile />}</footer>
}
