import React, { useState } from 'react'

import styles from './styles.module.scss'
import USDTIcon from '@icons/USDTIcon.svg'
import { Option, SelectUI } from './SelectUI'

export const ConverterLIMC: React.FC = () => {
  const [selectData, setSelectData] = useState<Option>()
  console.log(selectData)

  const options = [
    { value: 'TRC-20', label: 'TRC-20' },
    { value: 'ERC-20', label: 'ERC-20' },
  ]

  const getValue = (value: Option) => {
    setSelectData(() => value)
  }

  return (
    <div className={styles.cabinet__converterLIMC}>
      <div className={styles.cabinet__converterLIMCSelect}>
        <img src={USDTIcon} />
        <span>USDT</span>
        <SelectUI selectOptions={options} defaultValue='TRC-20' getValue={getValue} />
      </div>
      <div className={styles.cabinet__converterLIMCNum}>2,398</div>
    </div>
  )
}
