import React from 'react'
import styles from './styles.module.scss'

export const TableContent = ({ data }) => {
  return (
    <tbody className={styles.tr}>
      <tr className={styles.tr}>
        <th className={styles.th}>Дата</th>
        <th className={styles.th}>Начало</th>
        <th className={styles.th}>Прибыль</th>
      </tr>
      {data.map((item) => (
        <tr className={styles.tr} key={`${item.startSum}_${item.endSum}_${item.date}`}>
          <td className={styles.td}>{item.date}</td>
          <td className={styles.td}>{item.startSum}</td>
          <td className={styles.td}>{item.endSum}</td>
        </tr>
      ))}
    </tbody>
  )
}
