import React from 'react'
import styles from './styles.module.scss'
import yellowChip from '../../../../../../../../assets/images/yellow_chip.svg'

export const ModalTable: React.FC = () => {
  return (
    <table className={styles.table}>
      <thead className={styles.header}>
        <tr className={styles.header__row}>
          <td className={styles.header__cell}>Дата покупки</td>
          <td className={styles.header__cell}>Сумма</td>
          <td className={styles.header__cell}>До старта</td>
        </tr>
      </thead>
      <tbody className={styles.body}>
        <tr className={styles.body__row}>
          <td className={styles.body__cell}>21.05.21</td>
          <td className={styles.body__cell}>
            120
            {/* <img src={yellowChip} alt='Limc' className={styles.body__icon} /> */}
          </td>
          <td className={styles.body__cell}>
            4/60
            <div className={styles.body__line}>
              <span className={styles.body__line_fill} />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
