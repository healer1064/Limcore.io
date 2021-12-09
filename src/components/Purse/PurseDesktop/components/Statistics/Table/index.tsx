import React from 'react'
import styles from './styles.module.scss'

// const ProgressBar = () => (
//   <div className={styles.progressbar}>
//     <span className={styles.progressbar__track} />
//   </div>
// )

const ProgressInfo = ({ text }) => (
  <td className={styles.td__progress}>
    {text}
    {/* <ProgressBar /> */}
    <div className={styles.progressbar}>
      <span className={styles.progressbar__track} />
    </div>
  </td>
)

export const Table = () => {
  return (
    <table className={styles.table}>
      <tbody>
        <tr className={styles.tr}>
          <th className={styles.th}>Дата</th>
          <th className={styles.th}>Сумма</th>
          <th className={styles.th}>До старта</th>
        </tr>
        <tr className={styles.tr}>
          <td className={styles.td}>21.05.21</td>
          <td className={styles.td}>120 TB</td>
          <ProgressInfo text='4/60' />
        </tr>
        <tr className={styles.tr}>
          <td className={styles.td}>14.06.21</td>
          <td className={styles.td}>170 TB</td>
          <ProgressInfo text='23/60' />
        </tr>
        <tr className={styles.tr}>
          <td className={styles.td}>21.07.21</td>
          <td className={styles.td}>100 TB</td>
          <ProgressInfo text='35/60' />
        </tr>
        <tr className={styles.tr}>
          <td className={styles.td}>14.08.21</td>
          <td className={styles.td}>300 TB</td>
          <ProgressInfo text='18/60' />
        </tr>
      </tbody>
    </table>
  )
}
