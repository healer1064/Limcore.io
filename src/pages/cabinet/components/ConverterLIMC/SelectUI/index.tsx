import React, { useState, useEffect } from 'react'

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

  const onClickHideSelect = (event) => {
    const target = event.currentTarget
    const closeCondition =
      target?.classList?.contains('menu') ||
      target?.classList?.contains('menu__item') ||
      target?.classList?.contains('select__label')
    if (!closeCondition) {
      setOpened(() => false)
    }
  }

  useEffect(() => () => window.removeEventListener('click', onClickHideSelect))

  const onChangeSelectValue = (value: string) => {
    return () => {
      const selectValue = selectOptions.find((option) => option.value === value)
      setSelected(() => selectValue)
      setOpened(() => false)
      getValue(selectValue)
    }
  }

  const onMouseEnterOpen = () => {
    setOpened(() => true)
  }

  const onMouseLeaveClose = (event) => {
    const target = event.currentTarget
    const closeCondition =
      target.classList.contains('menu') ||
      target.classList.contains('menu__item') ||
      target.classList.contains('select__label')
    window.addEventListener('click', onClickHideSelect)
    if (!closeCondition) {
      setOpened(() => false)
    }
  }

  return (
    <div className={style.select}>
      <p onMouseEnter={onMouseEnterOpen} onMouseLeave={onMouseLeaveClose} className='select__label'>
        {selected.label}
        <span style={{ transform: opened ? 'rotate(180deg)' : '' }}>
          <img src={blueArrow} />
        </span>
      </p>
      <div style={{ display: opened ? 'block' : 'none' }} className='menu'>
        {selectOptions.map((option) => {
          return (
            <p className='menu__item' key={option.value} role='button' onClick={onChangeSelectValue(option.value)}>
              {option.label}
            </p>
          )
        })}
      </div>
    </div>
  )
}
