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

  let setTimeoutDisplayName
  const onMouseEnterOpen = () => {
    clearTimeout(setTimeoutDisplayName)
    setOpened(() => true)
  }

  const onMouseLeaveClose = () => {
    setTimeoutDisplayName = setTimeout(() => setOpened(() => false), 100)
  }

  const onMouseEnterOption = () => {
    clearTimeout(setTimeoutDisplayName)
  }

  return (
    <div className={style.select}>
      <p onMouseEnter={onMouseEnterOpen} onMouseLeave={onMouseLeaveClose} className='select__label'>
        {selected.label}
        <span style={{ transform: opened ? 'rotate(180deg)' : '' }}>
          <img src={blueArrow} />
        </span>
      </p>
      <div
        style={{ display: opened ? 'block' : 'none' }}
        className='menu'
        onMouseEnter={onMouseEnterOption}
        onMouseLeave={onMouseLeaveClose}
      >
        {selectOptions.map((option) => {
          return (
            <p
              className='menu__item'
              key={option.value}
              role='button'
              onClick={onChangeSelectValue(option.value)}
              onMouseEnter={onMouseEnterOption}
              onMouseLeave={onMouseLeaveClose}
            >
              {option.label}
            </p>
          )
        })}
      </div>
    </div>
  )
}
