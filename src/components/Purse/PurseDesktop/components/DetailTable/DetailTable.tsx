import React, { useState } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { WalletIcon } from '@icons/WalletIcon'

import chia from '@icons/chia.png'
import flax from '@icons/flax.png'
import nChain from '@icons/nChain.png'

const mock = [
  {
    id: 1,
    name: 'Chia',
    code: 'XCH',
    logo: chia,
    current: true,
    balance: 0,
    price: 0,
  },
  {
    id: 2,
    name: 'Flax',
    code: 'XFX',
    logo: flax,
    current: false,
    balance: 0,
    price: 0,
  },
  {
    id: 3,
    name: 'N-Chain',
    code: 'NCN',
    logo: nChain,
    current: false,
    balance: 0,
    price: 0,
  },
]

export const DetailTable = () => {
  return (
    <>
      <table className={styles.table}>
        <tr className={styles.tableRow}>
          <th className={classNames(styles.tableHeader, styles.tableHeader_asset)}>Ассет</th>
          <th className={classNames(styles.tableHeader, styles.tableHeader_balance)}>Баланс</th>
          <th className={classNames(styles.tableHeader, styles.tableHeader_price)}>Стоимость</th>
        </tr>
        {mock.map((item) => (
          <tr className={styles.tableRow} key={item.id}>
            <td className={styles.tableData}>
              <div className={styles.dataContainer}>
                <div className={styles.tableDataLogo}>
                  <img src={item.logo} alt={item.name} />
                </div>
                <h4 className={styles.tableDataName}>{item.name}</h4>
                <p className={styles.tableDataCode}>{item.code}</p>
                {item.current ? <WalletIcon /> : null}
              </div>
            </td>
            <td className={styles.tableData}>{item.balance}</td>
            <td className={styles.tableData}>${item.price}</td>
          </tr>
        ))}
      </table>
      <button className={styles.tableBtn}>Смотреть все</button>
    </>
  )
}
