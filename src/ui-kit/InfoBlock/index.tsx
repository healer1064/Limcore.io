import React from 'react'
import Styles from './styles.module.scss'
import classNames from 'classnames'

interface IInfoBlock {
  children: React.ReactNode
  className?: string
}

export const InfoBlock = ({ children, className }: IInfoBlock) => {
  return (
    <div className={classNames(Styles.wrapper, className)}>
      <div className={Styles.inner}>{children}</div>
      <div className={classNames(Styles.corner, Styles.topRight)} />
      <div className={classNames(Styles.corner, Styles.bottomRight)} />
      <div className={classNames(Styles.corner, Styles.bottomLeft)} />
    </div>
  )
}
