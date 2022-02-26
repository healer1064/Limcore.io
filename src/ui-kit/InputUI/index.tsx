import React, { useEffect, useState } from 'react'
import classnames from 'classnames'

import styles from './styles.module.scss'
import { Option, SelectUI } from '../SelectUI'

interface InputUIProps {
  type: string
  icon?: string
  select?: {
    options: Option[]
    getValue: (value: Option) => unknown
    defaultValue: string
  }
  disabled?: boolean
  onChange?: (value: string) => unknown
  value: string
  classname?: string
  label?: string
}

export const InputUI: React.FC<InputUIProps> = ({
  type,
  icon,
  disabled,
  select,
  value,
  onChange,
  classname,
  label,
}) => {
  const { options, getValue, defaultValue } = select ?? {
    options: undefined,
    getValue: undefined,
    defaultValue: undefined,
  }
  const [selectValue, setSelectValue] = useState<Option>(
    options?.find((option) => option.value === defaultValue) || undefined,
  )

  useEffect(() => {
    if (getValue) {
      getValue(selectValue)
    }
  }, [])

  const onChangeSelect = (value: Option) => {
    setSelectValue(value)
    getValue(value)
  }
  const onChangeInput = (event) => {
    const newValue = event.currentTarget.value
    onChange(newValue)
  }

  return (
    <div className={classname}>
      {(label || icon || options?.length) && (
        <div className={styles.label}>
          {icon && <img src={icon} alt='icon' />}
          {label && <span>{label}</span>}
          {options?.length && (
            <SelectUI selectOptions={options} defaultValue={defaultValue} getValue={onChangeSelect} />
          )}
        </div>
      )}
      <input
        className={classnames(styles.inputUI, disabled && styles.inputUI__disabled)}
        disabled={disabled}
        type={type}
        value={value}
        onChange={onChangeInput}
      />
    </div>
  )
}
