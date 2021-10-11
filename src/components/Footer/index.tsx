import React from 'react'
import Styles from './style.module.scss'
import ArrowRight from '@icons/arrow_right.png'

export const Footer = (): React.ReactElement => (
  <div className={Styles.footer}>
    <div>
      <span className={Styles.signature}>© 2021 &nbsp;&nbsp;18+</span>
    </div>
    <div>
      <div className={Styles.link}>
        <a className={Styles.link} target='_blank' href='/' rel='noreferrer'>
          Правовая информация
        </a>
        <img src={ArrowRight} className={Styles.link_arrow} alt='img' />
      </div>
    </div>
  </div>
)
