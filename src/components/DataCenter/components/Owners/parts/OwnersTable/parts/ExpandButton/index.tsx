import React, { ReactNode } from 'react'
import styles from './style.module.scss'

export interface IExpandButton {
  data: any
  children: ReactNode
  rows: number
  setRows: (prev) => void
  arr: any
  setArr: (any) => void
}

export const ExpandButton: React.FC<IExpandButton> = ({ data, setRows, rows, arr, setArr, children }) => {
  function onRenderHandler() {
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

  return (
    <button onClick={() => onRenderHandler()} className={styles.button} type='button'>
      {children}
    </button>
  )
}
