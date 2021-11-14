import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { WalletIcon } from '@icons/WalletIcon'

import tchiaIcon from '@icons/tchia.png'
import tflaxIcon from '@icons/tflax.png'
import thddIcon from '@icons/thdd.png'
import tnchainIcon from '@icons/tnchain.png'
import tsilicoinIcon from '@icons/tsilicoin.png'
import tspareIcon from '@icons/tspare.png'
import tfloraIcon from '@icons/tflora.png'
import tgreendogeIcon from '@icons/tgreendoge.png'
import tstaiIcon from '@icons/tstai.png'
import tdogechiaIcon from '@icons/tdogechia.png'
import tappleIcon from '@icons/tapple.png'
import twheatIcon from '@icons/twheat.png'
import tmaizeIcon from '@icons/tmaize.png'
import tchivesIcon from '@icons/tchives.png'
import tkaleIcon from '@icons/tkale.png'
import tavacadoIcon from '@icons/tavacado.png'
import tsocksIcon from '@icons/tsocks.png'
import tcryptodogeIcon from '@icons/tcryptodoge.png'
import ttacoIcon from '@icons/ttaco.png'
import tluckyIcon from '@icons/tlucky.png'
import ttadIcon from '@icons/ttad.png'
import cactusIcon from '@icons/cactusIcon.png'
import covidIcon from '@icons/covidIcon.png'
import senoIcon from '@icons/senoIcon.png'
import chaingreenIcon from '@icons/chaingreen.png'
import goji from '@icons/gojiIcon.png'

const mock = [
  {
    id: 1,
    name: 'Chia',
    code: 'XCH',
    logo: tchiaIcon,
    current: true,
    balance: 0,
    price: 0,
  },
  {
    id: 2,
    name: 'Flax',
    code: 'XFX',
    logo: tflaxIcon,
    current: false,
    balance: 0,
    price: 0,
  },
  {
    id: 3,
    name: 'N-Chain',
    code: 'NCN',
    logo: tnchainIcon,
    current: false,
    balance: 0,
    price: 0,
  },
  {
    id: 4,
    name: 'HDDcoin',
    // code: 'NCN',
    logo: thddIcon,
    current: false,
    balance: 0,
    price: 0,
  },
  {
    id: 5,
    name: 'Silicoin',
    // code: 'NCN',
    logo: tsilicoinIcon,
    current: false,
    balance: 0,
    price: 0,
  },
  {
    id: 6,
    name: 'Spare',
    // code: 'NCN',
    logo: tspareIcon,
    current: false,
    balance: 0,
    price: 0,
  },
  {
    id: 7,
    name: 'Flora',
    // code: 'NCN',
    logo: tfloraIcon,
    current: false,
    balance: 0,
    price: 0,
  },
  {
    id: 8,
    name: 'GreenDoge',
    // code: 'NCN',
    logo: tgreendogeIcon,
    current: false,
    balance: 0,
    price: 0,
  },
  {
    id: 9,
    name: 'STAI',
    // code: 'NCN',
    logo: tstaiIcon,
    current: false,
    balance: 0,
    price: 0,
  },
  {
    id: 10,
    name: 'DogeChia',
    // code: 'NCN',
    logo: tdogechiaIcon,
    current: false,
    balance: 0,
    price: 0,
  },
  {
    id: 11,
    name: 'Apple',
    // code: 'NCN',
    logo: tappleIcon,
    current: false,
    balance: 0,
    price: 0,
  },
  {
    id: 12,
    name: 'Wheat',
    // code: 'NCN',
    logo: twheatIcon,
    current: false,
    balance: 0,
    price: 0,
  },
  {
    id: 13,
    name: 'Maize',
    // code: 'NCN',
    logo: tmaizeIcon,
    current: false,
    balance: 0,
    price: 0,
  },
  {
    id: 14,
    name: 'Chives',
    // code: 'NCN',
    logo: tchivesIcon,
    current: false,
    balance: 0,
    price: 0,
  },
  {
    id: 15,
    name: 'Kale',
    // code: 'NCN',
    logo: tkaleIcon,
    current: false,
    balance: 0,
    price: 0,
  },
  {
    id: 16,
    name: 'Avocado',
    // code: 'NCN',
    logo: tavacadoIcon,
    current: false,
    balance: 0,
    price: 0,
  },
  {
    id: 17,
    name: 'Socks',
    // code: 'NCN',
    logo: tsocksIcon,
    current: false,
    balance: 0,
    price: 0,
  },
  {
    id: 18,
    name: 'CryptoDoge',
    // code: 'NCN',
    logo: tcryptodogeIcon,
    current: false,
    balance: 0,
    price: 0,
  },
  {
    id: 19,
    name: 'Taco',
    // code: 'NCN',
    logo: ttacoIcon,
    current: false,
    balance: 0,
    price: 0,
  },
  {
    id: 20,
    name: 'Lucky',
    // code: 'NCN',
    logo: tluckyIcon,
    current: false,
    balance: 0,
    price: 0,
  },
  {
    id: 21,
    name: 'Tad',
    // code: 'NCN',
    logo: ttadIcon,
    current: false,
    balance: 0,
    price: 0,
  },
  {
    id: 22,
    name: 'Сactus',
    // code: 'NCN',
    logo: cactusIcon,
    current: false,
    balance: 0,
    price: 0,
  },

  {
    id: 23,
    name: 'Covid',
    // code: 'NCN',
    logo: covidIcon,
    current: false,
    balance: 0,
    price: 0,
  },
  {
    id: 24,
    name: 'Seno',
    // code: 'NCN',
    logo: senoIcon,
    current: false,
    balance: 0,
    price: 0,
  },
  {
    id: 25,
    name: 'Chaingreen',
    // code: 'NCN',
    logo: chaingreenIcon,
    current: false,
    balance: 0,
    price: 0,
  },
  {
    id: 26,
    name: 'Goji',
    // code: 'NCN',
    logo: goji,
    current: false,
    balance: 0,
    price: 0,
  },
]

export const DetailTable = () => {
  const [displayedItems, setDisplayedItems] = useState([])

  const onClickMore = () => setDisplayedItems(mock)

  useEffect(() => {
    setDisplayedItems(mock.slice(0, 3))
  }, [])

  return (
    <>
      <table className={styles.table}>
        <tr className={styles.tableRow}>
          <th className={classNames(styles.tableHeader, styles.tableHeader_asset)}>Ассет</th>
          <th className={classNames(styles.tableHeader, styles.tableHeader_balance)}>Баланс</th>
          <th className={classNames(styles.tableHeader, styles.tableHeader_price)}>Стоимость</th>
        </tr>
        {displayedItems.map((item) => (
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
      {displayedItems.length <= 3 && (
        <button className={styles.tableBtn} onClick={onClickMore}>
          Смотреть все
        </button>
      )}
    </>
  )
}
