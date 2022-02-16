import React, { useState } from 'react'

import style from './styles.module.scss'
import blueArrow from '@icons/blueArrow.svg'

export interface Option {
  value: string
  label: string
}

interface SelectUIProps {
  selectOptions: Option[]
  defaultValue: string
  getValue: (value: Option) => unknown
}

export const SelectUI: React.FC<SelectUIProps> = ({ selectOptions, defaultValue, getValue }) => {
  const [selected, setSelected] = useState<Option>(
    selectOptions.find((option) => option.value === defaultValue) || selectOptions[0],
  )
  const [opened, setOpened] = useState<boolean>(false)

  const onChangeSelectValue = (value: string) => {
    return () => {
      const selectValue = selectOptions.find((option) => option.value === value)
      setSelected(() => selectValue)
      setOpened(() => false)
      getValue(selectValue)
    }
  }

  const onClickOpen = () => {
    setOpened((previous) => !previous)
  }

  return (
    <div className={style.select}>
      <p onClick={onClickOpen}>
        {selected.label}
        <span style={{ transform: opened ? 'rotate(180deg)' : '' }}>
          <img src={blueArrow} />
        </span>
      </p>
      <div style={{ display: opened ? 'block' : 'none' }}>
        {selectOptions.map((option) => {
          return (
            <p key={option.value} role='button' onClick={onChangeSelectValue(option.value)}>
              {option.label}
            </p>
          )
        })}
      </div>
    </div>
  )
}
