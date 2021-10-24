import React, { FC, ComponentPropsWithoutRef } from 'react'
import classNames from 'classnames'
import styles from './Button.module.scss'

type ButtonProps = { [key: string]: string | boolean } & ComponentPropsWithoutRef<'button'>

const Button: FC<ButtonProps> = (props) => {
  return (
    <button className={classNames(styles.button, props.className)} type='submit'>
      {props.children}
    </button>
  )
}

export default Button
