import React, { useState } from 'react'

import style from './styles.module.scss'
import blueArrow from '@icons/blueArrow.svg'
import useWindowSize from '@helpers/useWindowSizeHook'
import { BottomModal } from '@components/Modal/BottomModal'

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
  const { width } = useWindowSize()
  const isMobile = width <= 768

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
  const onClickOpen = () => {
    setOpened(() => true)
  }

  const onMouseLeaveClose = () => {
    setTimeoutDisplayName = setTimeout(() => setOpened(() => false), 100)
  }
  const onClickClose = () => {
    setOpened(() => false)
  }

  const onMouseEnterOption = () => {
    clearTimeout(setTimeoutDisplayName)
  }

  return (
    <div className={style.select}>
      {isMobile ? (
        <p onClick={onClickOpen} className='select__label'>
          {selected.label}
          <span style={{ transform: opened ? 'rotate(180deg)' : '' }}>
            <img src={blueArrow} />
          </span>
        </p>
      ) : (
        <p onMouseEnter={onMouseEnterOpen} onMouseLeave={onMouseLeaveClose} className='select__label'>
          {selected.label}
          <span style={{ transform: opened ? 'rotate(180deg)' : '' }}>
            <img src={blueArrow} />
          </span>
        </p>
      )}
      {isMobile ? (
        <BottomModal active={opened} setActive={onClickClose}>
          {selectOptions.map((option) => {
            return (
              <p
                className={style.select__menuItem}
                style={{ color: option.value === selected.value ? 'yellow' : 'white' }}
                key={option.value}
                role='button'
                onClick={onChangeSelectValue(option.value)}
              >
                <span
                  className={
                    option.value === selected.value
                      ? style.select__styleListSelected
                      : style.select__styleListNonSelected
                  }
                />
                {option.label}
              </p>
            )
          })}
        </BottomModal>
      ) : (
        <div
          style={{ display: opened ? 'block' : 'none', textAlign: isMobile ? 'left' : 'center' }}
          className='menu'
          onMouseEnter={onMouseEnterOption}
          onMouseLeave={onMouseLeaveClose}
        >
          {selectOptions.map((option) => {
            return (
              <p
                className={style.select__menuItem}
                key={option.value}
                role='button'
                onClick={onChangeSelectValue(option.value)}
                onMouseEnter={onMouseEnterOption}
                onMouseLeave={onMouseLeaveClose}
              >
                <span
                  className={
                    option.value === selected.value
                      ? style.select__styleListSelected
                      : style.select__styleListNonSelected
                  }
                />
                {option.label}
              </p>
            )
          })}
        </div>
      )}
    </div>
  )
}
