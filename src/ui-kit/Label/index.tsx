import React from 'react'
import Styles from './styles.module.scss'

interface LabelProps {
  className?: string
  titleText?: string
}

export const Label: React.FC<LabelProps> = ({ className, titleText, children }) => {
  const cls = [`${Styles.label}`]

  if (className) {
    cls.push(className)
  }

  return (
    <label className={cls.join(' ')}>
      {titleText}
      {children}
    </label>
  )
}
