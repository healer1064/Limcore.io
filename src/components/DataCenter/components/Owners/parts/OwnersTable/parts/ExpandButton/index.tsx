import React, { ReactNode } from 'react'
import styles from './style.module.scss'
import clsx from 'clsx'

export interface IExpandButton {
  data: any
  children: ReactNode
  rows: number
  setRows: (prev) => void
  arr: any
  setArr: (any) => void
  isMobile?: boolean
}

export const ExpandButton: React.FC<IExpandButton> = ({ data, setRows, rows, arr, setArr, children, isMobile }) => {
  function onRenderHandler(e) {
    e.preventDefault()
    if (data.length - rows >= 10) {
      setRows((prev) => prev + 10)
      setArr([...arr, ...data.slice(rows, rows + 10)])
    } else if (data.length === rows) {
      return null
    } else if (data.length - rows <= 10) {
      setRows(data.length)
      setArr([...arr, ...data.slice(rows, data.length)])
    }
  }

  const style = clsx({
    [styles.button]: true,
    [styles.button_mobile]: isMobile,
  })

  return (
    <button onClick={(e) => onRenderHandler(e)} className={style} type='button'>
      {children}
    </button>
  )
}
