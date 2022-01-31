import React from 'react'
import Styles from './styles.module.scss'

interface TextareaProps {
  className?: string
  onChange?: any
  name?: string
  value?: string
  rows?: number
  cols?: number
  textareaRef?: React.RefObject<HTMLTextAreaElement>
  placeholder?: string
  disabled?: boolean
  maxLength?: number
  error?: string
}

export const Textarea: React.FC<TextareaProps> = ({
  className,
  onChange,
  name,
  rows,
  textareaRef,
  cols,
  value,
  placeholder,
  disabled,
  maxLength,
  error,
}) => {
  const cls = [`${Styles.textarea}`]

  if (className) {
    cls.push(className)
  }

  if (error) {
    cls.push(`${Styles.textarea_error}`)
  }

  return (
    <fieldset className={Styles.fieldset}>
      <textarea
        ref={textareaRef}
        className={cls.join(' ')}
        onChange={onChange}
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        rows={rows}
        cols={cols}
      />
      {error && <span className={Styles.error}>{error}</span>}
    </fieldset>
  )
}
